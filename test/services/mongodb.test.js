const { expect } = require('chai');
const sinon = require('sinon');
const mongodb = require('mongodb');

const mongodbService = require('../../src/services/mongodb');

describe('mongodb', () => {
  const sandbox = sinon.createSandbox();
  let stubs;
  let closeSpy;

  beforeEach(() => {
    closeSpy = sandbox.spy();
    clientMock = {
      db: (name) => ({
        name,
      }),
      close: closeSpy,
    };
    stubs = {
      mongodb: {
        connect: sandbox
          .stub(mongodb.MongoClient.prototype, 'connect')
          .resolves(clientMock),
      },
    };
  });

  afterEach(async () => {
    sandbox.restore();
    await mongodbService.disconnect();
  });

  it('should connect mongodb client', async () => {
    const mongoInstance = await mongodbService.connect();

    expect(mongoInstance).to.be.not.null;
    expect(stubs.mongodb.connect.callCount).to.equal(1);
  });

  it('should only connect once', async () => {
    await mongodbService.connect();
    await mongodbService.connect();

    expect(stubs.mongodb.connect.callCount).to.equal(1);
  });

  it('should disconnect', async () => {
    await mongodbService.connect();
    await mongodbService.disconnect();

    expect(closeSpy.callCount).to.equal(1);
  });

  it('should only disconnect once', async () => {
    await mongodbService.connect();

    await mongodbService.disconnect();
    await mongodbService.disconnect();

    expect(closeSpy.callCount).to.equal(1);
  });

  it('should retrieve the db', async () => {
    await mongodbService.connect();

    const db = mongodbService.db();

    expect(db).to.deep.equal({
      name: 'database_test',
    });
  });

  it('should not retrieve the db if not availabke', async () => {
    const db = mongodbService.db();

    expect(db).to.be.null;
  });

  it('should retrieve the db', async () => {
    await mongodbService.connect();

    const client = mongodbService.client();

    expect(client).to.deep.equal(clientMock);
  });

  it('should not retrieve the db if not available', async () => {
    const client = mongodbService.client();

    expect(client).to.be.null;
  });
});
