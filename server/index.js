const { config } = require('./src/util');
const express = require('express');
const app = express();
const path = require('path');

/* Middleware */
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
require('express-async-errors');
app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'ejs');

// For testing
app.use((req, res, next) => {
  console.log(req.path, req.body);
  next();
});

/* Routes */
const accountRouter = require('./src/routes/account.routes');
app.use('/account', accountRouter);

app.get('/', (_, res) => {
  res.send('Hello World!');
});

/* Error Handlers */
app.use((err, _, res, __) => {
  console.error(
    `[${new Date().toISOString()}] ${err.name} ${err.code}: ${err.message}`
  );

  res.status(500).send(err.message);
});

app.listen(config.PORT, () => {
  console.log(`Server is now listening on port ${config.PORT}`);
});
