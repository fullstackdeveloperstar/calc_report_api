/**
 * Copyright by Felipe Mantilla Gomez
 */

const env = {
  database: 'calculation_report',
  username: 'postgres',
  password: 'password',
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

module.exports = env;