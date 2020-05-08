'use strict';

async function hello(req, res, next) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  res.json('Hello World');
}

module.exports = {
  hello,
};
