require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 3000,
  SIGN_IN_URL:
    process.env.SIGN_IN_URL ||
    'https://netzwelt-devtest.azurewebsites.net/Account/SignIn',
};
