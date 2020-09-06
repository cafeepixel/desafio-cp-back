require('dotenv').config();
const mysqlx = require('@mysql/xdevapi');

const connection = async () =>
  mysqlx.getSession({
    user: 'root',
    password: 'backendisdangerous',
    host: 'localhost',
    port: 33060,
    schema: 'coffeeAndPixelBooks',
  })
    .catch((err) => console.error(err));

module.exports = connection;
