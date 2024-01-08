const { config } = require('./util');
const express = require('express');
const app = express();

/* Middleware */
app.use(express.json());
require('express-async-errors');

/* Routes */
const accountRouter = require('./routes/account.routes');
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
