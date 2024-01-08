const { config } = require('../util');
const axios = require('axios');

const getTerritoryData = async () => {
  const { data } = await axios.get(config.TERRITORY_DATA_URL);
  return data;
};

module.exports = { getTerritoryData };
