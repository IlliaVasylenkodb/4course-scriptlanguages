const axios = require('axios');
const config = require('./config');

const getHelloFromApi = async () => {
  // config.get('apiUrl') візьме значення http://localhost:3000 з .env або за замовчуванням
  const response = await axios.get(config.get('apiUrl'));
  return response.data;
};

module.exports = { getHelloFromApi };