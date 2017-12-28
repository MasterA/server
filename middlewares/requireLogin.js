module.exports = (req, res, next) => {
  // 0. VERIFY USER
  if(!req.user) {
    // if no user exist in the cookie session
    // return status of 401 which means unauthorized or forbidden.
    // do not continue middleware chain
    return res.status(401).send({ error: 'You must be log in!' });
  } else {
    // continue middleware chain, ultimately to continue Route Handler.
    next();
  }

};
