const mongoose = require('mongoose');
//const Schema = mongoose.Schema; destructuring below:
const { Schema } = mongoose;


const skillsSchema = new Schema({
  title: String,
  length: Date,
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
});


mongoose.model('skills', skillsSchema);
