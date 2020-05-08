'use strict';

/**
 * Waits for a Promise to resolve given some predicate
 *
 * @param {function} spy sinon spy
 * @param {number} ms timeout in ms
 */
async function awaitAsync(predicate, ms = 100) {
  while (!predicate) {
    await new Promise((resolve) => setTimeout(resolve, ms));
  }
}

module.exports = awaitAsync;
