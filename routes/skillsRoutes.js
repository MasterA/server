const _ = require('lodash');
const Path = require('path-parser');
// url library is a node library [ no JS ]
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Skills = mongoose.model('skills');

module.exports = app => {

  // need to authanticate user via 'requireLogin'
  // ( just to make sure a user is logged-in, since we using user.id )
  app.get('/api/skills', requireLogin, async (req, res) => {
    const skills = await Skills.find({ _user: req.user.id });
    res.send(skills);
  });

  // 0. 'requireLogin' = check if the user is logged in
  // 1. '(req, res) => {}' = now this is the functionality intended for this post.
  app.post('/api/skills', requireLogin, async (req, res) => {
    const { title, length } = req.body;

    const skills = new Skills({
      title,
      length,
      _user: req.user.id
    });


    // the skills object we need to safe in our database (mlab).
    await skills.save();
    // updating user and save/update in our our database (mlab).
    const user = await req.user.save();
    // making sure we send the updated user to reducers etc.
    res.send(user);


  });

};
