const mongoose = require('mongoose');
//const Schema = mongoose.Schema; destructuring below:
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');


const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  // _user setup a relationship between collections
  // a.k.a. relationship field/reference field
  // _user contains a unique id that identify the user
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  dateSend: Date,
  lastResponded: Date
});


mongoose.model('surveys', surveySchema);
