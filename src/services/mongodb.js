'use strict';

const mongodb = require('mongodb');

const config = require('../config');

let mongodbClient = null;

async function connect() {
  if (mongodbClient === null) {
    const client = await mongodb.MongoClient.connect(
      config.mongodb.url,
      config.mongodb.options,
    );
    mongodbClient = {
      client,
      db: client.db(config.mongodb.name),
    };
  }
  return mongodbClient;
}

async function disconnect() {
  if (mongodbClient !== null) {
    await mongodbClient.client.close();
    mongodbClient = null;
  }
}

module.exports = {
  connect,
  disconnect,
  db: () => (mongodbClient ? mongodbClient.db : null),
  client: () => (mongodbClient ? mongodbClient.client : null),
};
