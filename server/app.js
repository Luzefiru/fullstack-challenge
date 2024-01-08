const { config } = require('./src/util');
const { authenticate, errorHandler } = require('./src/middleware');
const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const { homeController } = require('./src/controllers');

/* Middleware */
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
require('express-async-errors');
app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'ejs');
app.use(cookieParser());

/* TODO - remove after testing */
app.use((req, res, next) => {
  console.log(req.path, req.body, req.cookies);
  next();
});

/* Routes */
const { homeRouter, accountRouter } = require('./src/routes');
app.use('/account', accountRouter);
app.use('/home', authenticate, homeRouter);
app.get('/', authenticate, async (_, res) => {
  const territoryData = await homeController.getTerritoryData();
  res.render('index', { territoryData });
});

/* Error Handlers */
app.use(errorHandler);

app.listen(config.PORT, () => {
  console.log(`Server is now listening on port ${config.PORT}`);
});
