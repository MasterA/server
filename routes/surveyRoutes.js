const _ = require('lodash');
const Path = require('path-parser');
// url library is a node library [ no JS ]
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => {

  // need to authanticate user via 'requireLogin'
  // ( just to make sure a user is logged-in, since we using user.id )
  app.get('/api/surveys', requireLogin, async (req, res) => {
    const surveys = await Survey.find({ _user: req.user.id })
      .select({ recipients: false });
    res.send(surveys);
  });


  // need to authanticate user via 'requireLogin'
  // ( just to make sure a user is logged-in, since we using user.id )
  app.get('/api/matches', requireLogin, async (req, res) => {
    const surveys = await Survey.find({ _user: req.user.id })
      .select({ recipients: false });
    res.send(surveys);
  });


  app.get('/api/surveys/:surveyId/:choice', (req, res) => {
    res.send('Thanks for voting!');
  });

  // (webhook) sendgrid
  // COMMENTS in ONENOTE in section "Webhook sendgrid ..."
  app.post('/api/surveys/webhooks', (req, res) => {
    // PROCESSING PIPELINE LOGIC:
    const p = new Path('/api/surveys/:surveyId/:choice');

    _.chain(req.body)
      .map((event) => {
          const match = p.test(new URL(event.url).pathname);
          if (match) {
            return { email: event.email, surveyId: match.surveyId, choice: match.choice };
          }
      })
      .compact()
      .uniqBy('email', 'surveyId')
      .each((event) => {
        // email = 'a@a.com'
        // choice = 'yes || no'
        Survey.updateOne({
          _id: event.surveyId,
          recipients: {
            $elemMatch: { email: event.email, responded: false }
          }
        }, {
          $inc: { [event.choice]: 1 },
          // $elemMatch is replaced by $
          $set: { 'recipients.$.responded': true },
          lastResponded: new Date()
        }).exec();
      })
      // return outcome of chain by using .value()
      .value();
    res.send({});
  });

  // 0. 'requireLogin' = check if the user is logged in
  // 1. 'requireCredits' = check if the user has enough credits
  // 2. '(req, res) => {}' = now this is the functionality intended for this post.
  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;

    // new surveys
    /*
    const survey = new Survey({
      title: title,
      subject: subject,
      body: body,
      recipients: recipients.split(',').map(email => ({
        return { email: email.trim() }
        })
      ),
      _user: req.user.id,
      dateSend: Date.now();
    });
    */
    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSend: Date.now()
    });

    try {
      // Great place to send an email!
      const mailer = new Mailer(survey, surveyTemplate(survey));
      // so the mailer can send to sendgrid
      await mailer.send();
      // after we send the survey we need to safe in our database (mlab).
      await survey.save();
      // reduce one credit for sending one survey.
      req.user.credits -= 1;
      // updating user and save/update in our our database (mlab).
      const user = await req.user.save();
      // making sure we send the updated user to reducers etc.
      res.send(user);
    } catch(err) {
      res.status(422).send(err);
    }

  });
};
