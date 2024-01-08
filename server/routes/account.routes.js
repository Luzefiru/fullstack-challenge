const router = require('express').Router();
const accountController = require('../controllers/account.controller');

router.get('/login', (_, res) => {
  res.send(`
    <form style="border: 1px solid black; padding: 2rem; width: 20rem">
      <div>
        <label for="username">Username</label>
        <input type="text" id="username" name="username" />
      </div>
      <div>
        <label for="password" style="margin-top: 2rem">Password</label>
        <input type="password" id="password" name="password" />
      </div>
      <button>Login</button>
    </form>
  `);
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const loggedInUser = await accountController.login(username, password);
    res.json(loggedInUser);
  } catch (e) {
    const newError = new Error('Incorrect username or password!');
    newError.code = 'LOGIN_ERR';
    throw newError;
  }
});

module.exports = router;
