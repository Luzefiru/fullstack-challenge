const { config } = require('../util');
const axios = require('axios');
const jwt = require('jsonwebtoken');

const login = async (username, password) => {
  const { data } = await axios.post(config.SIGN_IN_URL, { username, password });
  const token = jwt.sign({ user: data }, config.JWT_SECRET);
  return token;
};

module.exports = { login };
