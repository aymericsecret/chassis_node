'use strict';

const bunyan = require('bunyan');

let logger = null;

/* istanbul ignore next */
module.exports = (() => {
  if (logger === null) {
    logger = bunyan.createLogger({ name: 'chassis_node' });
  }
  return logger;
})();
