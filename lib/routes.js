const User = require('../lib/models/user');
const { Router } = require('express');

module.exports = Router()
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
