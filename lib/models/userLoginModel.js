const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true
  },
  passwordHash: {
    type: String,
    required: true
  }
}, {
  toJSON: {
    transform: (doc, ret) => {
      delete ret.passwordHash;
    }
  }
});

schema.virtual('password').set(function(password){
  const passwordHash = bcrypt.hashSync(password, 14);
  this.passwordHash = passwordHash;
});

schema.statics.validate = async function({ email, password }){
  const user = await this.findOne({ email });
  if(!user){
    const err = new Error('Incorrect Password/Email');
    err.status = 401;
    throw err;
  } 
  const pass = bcrypt.compareSync(password, user.passwordHash);
  if(!pass === true){
    const err = new Error('Incorrect Password/Email');
    err.status = 401;
    throw err;
  }
  console.log('!!!!!!!!!!!', user);
  return user;
};

schema.methods.makeToken = function() {
  return jwt.sign(this.toJSON(), process.env.APP_SECRET, {
    expiresIn: '24h'
  });
};

module.exports = mongoose.model('UserLoginModel', schema);
