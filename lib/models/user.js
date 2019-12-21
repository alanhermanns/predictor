// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const chance = require('chance');

const schema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  birthday: {
    type: String,
    required: true
  },
  momBDay: {
    type: String,
    required: true
  },
  dadBDay: {
    type: String,
    required: true
  },
  favoriteColor: {
    type: String,
    required: true
  },
  birthCity: {
    type: String,
    required: true
  },
  numberOfSibilings: {
    type: Number,
    required: true
  }
});
// }, {
//   toJSON: {
//     transform: (doc, ret) => {
//       delete ret.passwordHash;
//     }
//   }

// schema.virtual('password').set(function(password){
//   const passwordHash = bcrypt.hashSync(password, 14);
//   this.passwordHash = passwordHash;
// });

// schema.statics.validate = async function({ email, password }){
//   const user = await this.findOne({ email });
//   if(!user){
//     const err = new Error('Incorrect Password/Email');
//     err.status = 401;
//     throw err;
//   } 
//   const pass = bcrypt.compareSync(password, user.passwordHash);
//   if(!pass === true){
//     const err = new Error('Incorrect Password/Email');
//     err.status = 401;
//     throw err;
//   }
//   console.log('!!!!!!!!!!!', user);
//   return user;
// };


schema.methods.predictDeath = async function(){
  const length = Math.floor(chance().d10());
  console.log(length);
  let momBDay = this.momBDay;
  let dadBDay = this.dadBDay;
  const lengthOfColor = length;
  const dayOfDeath = Math.floor(30 / lengthOfColor);
  const month0fDeath = Math.floor(((Math.random()) * 12)) + 1;
  let dad = new Date(dadBDay).getFullYear();
  let mom = new Date(momBDay).getFullYear();
  const date = new Date().getFullYear();
  let dadAge = date - dad;
  let momAge = date - mom;
  let dateOfDeath = (`${month0fDeath} / ${dayOfDeath} /${date + (Math.floor(dadAge + momAge) / 4) - Math.floor((Math.random()) * 20)}`);
  return [`${this.fullName}`, ` ${dateOfDeath}`];
};
// schema.methods.makeToken = function() {
//   return jwt.sign(this.toJSON(), process.env.APP_SECRET, {
//     expiresIn: '24h'
//   });
// };





module.exports = mongoose.model('User', schema);
