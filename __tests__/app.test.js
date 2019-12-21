require('dotenv').config();

const request = require('supertest');
const app = require('../lib/app');
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');

describe('app routes', () => {
  beforeAll(() => {
    connect();
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });

  it('should post and return a date', () => {
    return request(app)
      .post('/api/v1/date')
      .send({
        dadBDay: '4 / 4 / 1962',
        momBDay: '4 / 4 / 1966',
        birthday: '4 / 4 / 1995',
        favoriteColor: 'Red',
        fullName: 'Big Fred',
        birthCity: 'San Domingo',
        numberOfSibilings: 6,
      })
      .then(res => {
        expect(res.body).toEqual({
          date: expect.any(String)
        });
      });
  });
});
