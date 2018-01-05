const mongoose = require('mongoose');
const { Schema } = mongoose;

// sub-document collection
const recipientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false }
});

// not importing but exporting it
// since it's a sub-document collection
module.exports = recipientSchema;
