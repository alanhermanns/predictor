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


module.exports = mongoose.model('User', schema);
