const errorHandler = (err, _, res, __) => {
  console.error(
    `[${new Date().toISOString()}] ${err.name} ${err.code}: ${err.message}`
  );

  if (err.code === 'INVALID_TOKEN_ERR') {
    return res.redirect('/account/login');
  }

  res.status(500).send(err.message);
};

module.exports = errorHandler;
