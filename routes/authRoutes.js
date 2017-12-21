const passport = require('passport');

module.exports = app => {

  // Route Handler
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  // Route Handler
  app.get(
    '/auth/google/callback',
    passport.authenticate('google')
  );

 // Routh Handler ( Logout User )
 // req.logout() is a function that is attached to req automatically
 // by passport ( destroys cookie "req.user" )
 app.get('/api/logout', (req, res) => {
   req.logout();
   // response with user which should be
   // something like null to the end-user
   res.send(req.user);
 });

 // Route Handler ( Cookie )
 // req =  incoming request of the browser
 // res =  outgoing response of the browser
  app.get(
    '/api/current_user',
    (req, res) => {
         res.send(req.user);
    }
  );

}
