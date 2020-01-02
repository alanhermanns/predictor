const User = require('../lib/models/user');
const { Router } = require('express');

module.exports = Router()
  .post('/auth/signup', (req, res, next) => {
    const user = req.body;
    User
      .create(user)
      .then(user =>{
        res.cookie('session', user.makeToken());
        res.send(user);
      })
      .catch(next);
  })
  .post('/auth/login', (req, res, next) => {
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
