const { config } = require('./util');
const express = require('express');
const app = express();

app.get('/', (_, res) => {
  res.send('Hello World!');
});

app.listen(config.PORT, () => {
  console.log(`Server is now listening on port ${config.PORT}`);
});
