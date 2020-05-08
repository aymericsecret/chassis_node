'use strict';

const errors = require('../../components/errors');

module.exports = {
  '/hello': {
    get: {
      summary: 'Get a Hello World',
      description: 'Gets a nice hello world',
      tags: [],
      security: [],
      parameters: [],
      responses: {
        200: {
          description: 'The nice hello',
          content: {
            'application/json': {
              schema: {
                type: 'string',
                description: 'The greeting',
                example: 'Hello World',
              },
            },
          },
        },
        500: errors[500],
      },
    },
  },
};
