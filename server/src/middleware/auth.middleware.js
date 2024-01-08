const { config } = require('../util');
const jwt = require('jsonwebtoken');

const authenticate = (req, _, next) => {
  const token = req.cookies.token;
  if (token && token.toLowerCase().startsWith('bearer ')) {
    try {
      req.user = jwt.verify(token.substring(7), config.JWT_SECRET);
    } catch {
      const invalidError = new Error('Token is invalid');
      invalidError.code = 'INVALID_TOKEN_ERR';
      throw invalidError;
    }
  } else {
    const missingError = new Error('Token is missing');
    missingError.code = 'INVALID_TOKEN_ERR';
    throw missingError;
  }
  next();
};

module.exports = authenticate;
