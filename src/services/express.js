'use strict';

const bodyParser = require('body-parser');
const express = require('express');

const apiRouter = require('../api');
const errorHandler = require('../middlewares/errorHandler');

/**
 * Create an express application with the correct middlewares/routesmiddleware
 * @return {Object} express app
 */
function createApp() {
  const app = express();

  app.get('/heartbeat', (req, res) =>
    res.status(200).json({
      state: 'up',
    }),
  );

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use('/api', apiRouter);

  app.use(errorHandler());

  return app;
}

module.exports = {
  createApp,
};
