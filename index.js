const express = require("express");
const app = express();

app.get('/', (req, res) => {
  res.send({ bye: 'buddy' });
});

// DYNAMIC PORT BINDING
const PORT = process.env.PORT || 5000;
app.listen(PORT);

/*
Creating app... done, ⬢ limitless-hamlet-26743
https://limitless-hamlet-26743.herokuapp.com/ | https://git.heroku.com/limitless-hamlet-26743.git
*/
