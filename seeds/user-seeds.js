const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'elonmusk',
    email: 'elonmusk@email.com',
    password: 'password123'
  },
  {
    username: 'jeffbezos',
    email: 'jeffbezos@email.com',
    password: 'password123'
  },
  {
    username: 'billgates',
    email: 'billgates@email.com',
    password: 'password123'
  },
  {
    username: 'kanye',
    email: 'ye@email.com',
    password: 'password123'
  },
  {
    username: 'beyonce',
    email: 'beyonce@email.com',
    password: 'password123'
  },
  {
    username: 'joebiden',
    email: 'president@email.com',
    password: 'password123'
  },
  {
    username: 'stevefokas',
    email: 'email@email.com',
    password: 'password123'
  },
  {
    username: 'joellembiid',
    email: 'gosixers@email.com',
    password: 'password123'
  },
  {
    username: 'billmurray',
    email: 'bill@email.com',
    password: 'password123'
  },
  {
    username: 'oprah',
    email: 'oprah@email.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;