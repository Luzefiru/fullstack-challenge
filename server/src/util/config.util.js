require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 3000,
  JWT_SECRET: process.env.JWT_SECRET || 'secret',
  SIGN_IN_URL:
    process.env.SIGN_IN_URL ||
    'https://netzwelt-devtest.azurewebsites.net/Account/SignIn',
  TERRITORY_DATA_URL:
    process.env.TERRITORY_DATA_URL ||
    'https://netzwelt-devtest.azurewebsites.net/Territories/All',
};
