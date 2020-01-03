const User = require('../lib/models/user');
const UserLoginModel = require('../lib/models/userLoginModel');
const { Router } = require('express');

module.exports = Router()
  .post('/auth/signup', (req, res, next) => {
    const userLoginModel = req.body;
    const cookies = req.cookies;
    console.log(cookies);
    UserLoginModel
      .create(userLoginModel)
      .then(userLoginModel =>{
        res.cookie('session', userLoginModel.makeToken());
        res.send(userLoginModel);
      })
      .catch(next);
  })
  .post('/auth/login', (req, res, next) => {
    const cookies = req.cookies;
    console.log(cookies);
    User
      .validate(req.body)
      .then(validatedUser => {
        res.cookie('session', validatedUser.makeToken());
        res.send(validatedUser);
      })
      .catch(next);
  })
  .post('/date', (req, res, next) => {
    console.log(req.body);
    const cookies = req.cookies;
    console.log(cookies);
    User
      .create(req.body)
      .then(user => user.predictDeath())
      .then(date => {
        res.send({
          date: date 
        });
      })
      .catch(next);
  });
