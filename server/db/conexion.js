const { Pool } = require('pg');
require('dotenv').config();

new pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  allowExitOnIdle: true
})

module.exports = pool