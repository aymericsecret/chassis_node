'use strict';

const HttpStatus = require('http-status-codes');

const config = require('../config');
const logger = require('../utils/logger');

/* istanbul ignore next */
module.exports = function errorHandler() {
  return function middleware(err, req, res, next) {
    const body = {};
    const status = err.status || HttpStatus.INTERNAL_SERVER_ERROR;
    body.status_code = status;
    body.detail = err.message;

    if (config.web.showError) {
      body.stack = err.stack;
    }

    if (status >= HttpStatus.INTERNAL_SERVER_ERROR) {
      logger.error(err.message, err);
    } else {
      logger.info(err.message, err);
    }
    return res.status(status).send(body);
  };
};
