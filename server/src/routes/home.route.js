const router = require('express').Router();
const { homeController } = require('../controllers');

router.get('/index', async (_, res) => {
  const territoryData = await homeController.getTerritoryData();

  res.render('index', { territoryData });
});

module.exports = router;
