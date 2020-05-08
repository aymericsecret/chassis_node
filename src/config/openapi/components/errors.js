'use strict';

const errors = {
  500: {
    description: 'Internal Server Error',
    content: {
      'application/json': {
        example: {
          status_code: 500,
          detail: 'Internal Server Error',
        },
        schema: {
          $ref: '#/components/schemas/error',
        },
      },
    },
  },
  400: {
    description: 'Bad Request',
    content: {
      'application/json': {
        example: {
          status_code: 400,
          detail: 'Bad Request',
        },
        schema: {
          $ref: '#/components/schemas/error',
        },
      },
    },
  },
};

module.exports = errors;
