const convict = require('convict');
require('dotenv').config();

const config = convict({
  port: {
    doc: 'Порт, на якому працює proxy-додаток',
    format: 'port',
    default: 3001,
    env: 'PROXY_PORT'
  },
  apiUrl: {
    doc: 'URL додатка api (з лабораторної 1)',
    format: String,
    default: 'http://localhost:3000',
    env: 'API_URL'
  }
});

config.validate({ allowed: 'strict' });
module.exports = config;