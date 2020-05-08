'use strict';

const http = require('http');

const config = require('./config');
const mongodb = require('./services/mongodb');
const expressService = require('./services/express');
const logger = require('./utils/logger');

let app = null;
let server = null;

async function start() {
  if (app) {
    return app;
  }

  try {
    logger.info('Express server initialisation');

    await mongodb.connect();

    app = expressService.createApp();
    server = http.createServer(app);
    await server.listen({ port: config.web.port });
    logger.info('[server] HTTP server listening', { port: config.web.port });
  } catch (err) {
    logger.error('Error while starting the app', { err });
    await stop();
  }
  return app;
}

async function stop() {
  logger.info('Web Process stopping');

  await mongodb.disconnect();
  logger.info('MongoDb Disconnect');

  if (server) {
    logger.info('Closing the server');
    await server.close();
    server = null;
  }
  app = null;
}

/* istanbul ignore if */
if (!module.parent) {
  if (process.argv.length < 2) {
    process.exit(0);
  }

  start(process.argv[2], ...process.argv.slice(3)).catch((err) =>
    stop('uncaughtException', err),
  );
}

module.exports = {
  start,
  stop,
};
