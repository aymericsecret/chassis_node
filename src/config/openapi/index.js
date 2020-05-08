'use strict';

const components = require('./components');
const info = require('./info');
const paths = require('./paths');

const spec = {
  openapi: '3.0.1',
  servers: [
    {
      description: 'Chassis node',
      url: '/api',
    },
  ],
  info,
  components,
  tags: [],
  paths,
};

module.exports = spec;
