const { expect } = require('chai');
const http = require('http');
const request = require('supertest');
const sinon = require('sinon');

const awaitAsync = require('./_utils/awaitAsync');
const { start, stop } = require('../src');
const logger = require('../src/utils/logger');

describe('Web process', () => {
  describe('Start process', () => {
    const sandbox = sinon.createSandbox();
    let loggerSpy;

    beforeEach(async () => {
      loggerSpy = sandbox.spy(logger, 'info');
    });

    afterEach(async () => {
      await stop();
      sandbox.restore();
    });

    it('should return the app if it already exists', async () => {
      const app = await start();
      app.foo = 'bar';

      const app2 = await start();
      expect(app2).to.have.property('foo').that.equals('bar');
      expect(loggerSpy.args).to.deep.equal([
        ['Express server initialisation'],
        [
          '[server] HTTP server listening',
          {
            port: 3001,
          },
        ],
      ]);
    });

    it('should stop if the process fails to start', async () => {
      const processExitSpy = sandbox.spy(process, 'exit');
      sandbox
        .stub(http, 'createServer')
        .throws(new Error('An error has occures'));

      const app = await start();
      awaitAsync(processExitSpy.callCount === 1);

      expect(app).to.deep.equal(null);
      expect(loggerSpy.args).to.deep.equal([
        ['Express server initialisation'],
        ['Web Process stopping'],
        ['MongoDb Disconnect'],
      ]);
    });

    it('should not try to close the server there is none started', async () => {
      await stop();

      expect(loggerSpy.args).to.deep.equal([
        ['Web Process stopping'],
        ['MongoDb Disconnect'],
      ]);
    });
  });

  describe('GET /hearbeat', () => {
    let app;

    before(async () => {
      app = await start();
    });

    after(async () => {
      await stop();
    });

    it('Should return service status', async () => {
      const { status, body } = await request(app).get('/heartbeat').send();

      expect({ status, body }).to.deep.equal({
        status: 200,
        body: { state: 'up' },
      });
    });
  });
});
