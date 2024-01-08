const router = require('express').Router();
const accountController = require('../controllers/account.controller');

router.get('/login', (_, res) => {
  res.render('login');
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const loggedInUser = await accountController.login(username, password);
    res.json(loggedInUser);
  } catch (e) {
    const newError = new Error('Invalid username or password');
    newError.code = 'LOGIN_ERR';
    throw newError;
  }
});

module.exports = router;
