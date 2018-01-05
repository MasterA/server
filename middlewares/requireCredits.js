module.exports = (req, res, next) => {
  // 0. VERIFY USER HAS ENOUGH CREDITS
  if(req.user.credits < 1 ) {
    // if current user  < 1 credits .
    // return status of 403 which means Forbidden.
    // do not continue middleware chain
    return res.status(403).send({ error: 'Not enough credits!' });
  } else {
    // continue middleware chain, ultimately to continue Route Handler.
    next();
  }

};
