require('dotenv').config();
const mysqlx = require('@mysql/xdevapi');

const config = {
  user: process.env.DBUSER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.DBPORT,
  schema: process.env.SCHEMA,
};

const connection = async () =>
  mysqlx.getSession(config)
    .catch((err) => console.error(err));

module.exports = connection;
