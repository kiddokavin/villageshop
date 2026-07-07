const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  mobile: String,
  password: String,
  address: String,
  role: { type: String, default: 'customer' }
});

module.exports = mongoose.model('User', UserSchema);
