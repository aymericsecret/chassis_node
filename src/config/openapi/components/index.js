'use strict';

const errors = require('./errors');

module.exports = {
  schemas: {
    objectId: {
      type: 'string',
      pattern: '^[0-9a-fA-F]{24}$',
      description: 'Hexadecimal string of MongoDB ObjectId (24 characters)',
      example: '5c87923b8012f71b003e4a87',
    },
    error: {
      type: 'object',
      required: ['status_code', 'detail'],
      properties: {
        status_code: {
          type: 'number',
          example: 500,
          description: 'Error code status',
        },
        detail: {
          type: 'string',
          example: 'Internal Server Error',
          description: 'Error message',
        },
        stack: {
          type: 'string',
          description: 'Stack trace',
        },
      },
    },
  },
  responses: errors,
  securitySchemes: {},
};
