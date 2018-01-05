const sendgrid = require('sendgrid');
// could had done destructuring
// const { mail } = sandgrid;
const helper = sendgrid.mail;
const keys = require('../config/keys');

class Mailer extends helper.Mail {

  // the constructor is called automatically when
  // ... new Mailer() is called.
  constructor({ subject, recipients }, content) {
    super();

    this.sgApi = sendgrid(keys.sendGridKey);
    this.from_email = new helper.Email('no-reply@email.com');
    this.subject = subject;
    this.body = new helper.Content('text/html', content);
    this.recipients = this.formatAddresses(recipients);

    this.addContent(this.body);
    this.addClickTracking();
    this.addRecipients();

  }

  formatAddresses(recipients) {
    // just give me the email from recipients array
    return recipients.map(({ email }) => {
      return new helper.Email(email);
    });
  }

  addClickTracking() {
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);

    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);
  }

  addRecipients() {
    const personalize = new helper.Personalization();

    this.recipients.forEach(recipient => {
      personalize.addTo(recipient);
    });
    this.addPersonalization(personalize);
  }

  // creating request
  async send() {
    const request = this.sgApi.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: this.toJSON()
    });

    // sending the request to sendgrid
    const response = await this.sgApi.API(request);

    // return the response from sendgrid to us.
    // e.g. like an ack to let us know
    // everything cameout good etc.
    return response;
  }
}

 module.exports = Mailer;
