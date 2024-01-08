const { config } = require('../util');
const axios = require('axios');

const login = async (username, password) => {
  const { data } = await axios.post(config.SIGN_IN_URL, { username, password });
  return data;
};

module.exports = { login };
