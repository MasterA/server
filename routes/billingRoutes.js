const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {

  // POST Route Handler ( Stripe Post )
  // watch for the api/stripe call from the front end
  // triggered after a user makes a payment.
  // The post will reach to Stripes api and
  // finish the charge then update the user number of credits.
  // 0. VERIFY USER: Passing 'requireLogin' as arg
  // to app.post is a reference to a function.But the app will call it
  // internally when a request to this end point is made.
  // That executes before we send
  // a response to whoever did the request.
  app.post('/api/stripe', requireLogin, async (req, res) => {

    // 1. MAKES CHARGE REQUEST:
    // the id identifies the token that we're trying to charge money to.
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      source: req.body.id, // obtained with Stripe.js
      description: "$5 for 5 credits"
    });

    // 2. ADD CREDITS TO USER:
    // passaport wiries req.user to return the logged user
    // because when you logged in passport will save the user object in session
    // also copy of the model in our database.
    req.user.credits += 5;

    // use save() to persist change in the database
    // save() is asychronous request
    const user = await req.user.save();

    // 3. SEND BACK THE USER TO WHOEVER DID THE REQUEST
    res.send(user);


  });
};
