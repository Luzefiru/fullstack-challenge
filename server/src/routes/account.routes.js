const router = require('express').Router();
const accountController = require('../controllers/account.controller');

router.get('/login', (req, res) => {
  if (req.user) {
    return res.status(304).redirect('/');
  }

  res.render('login');
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const loggedInUser = await accountController.login(username, password);
    res.cookie('token', `Bearer ${loggedInUser}`);
    res.status(200).end();
  } catch (e) {
    const newError = new Error('Invalid username or password');
    newError.code = 'LOGIN_ERR';
    throw newError;
  }
});

module.exports = router;
