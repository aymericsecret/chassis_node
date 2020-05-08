const { expect } = require('chai');
const request = require('supertest');

const { start, stop } = require('../../../src');

describe('GET /api/hello', () => {
  let app;

  before(async () => {
    app = await start();
  });

  after(async () => {
    await stop();
  });

  it('Should say hello', async () => {
    const { status, body } = await request(app).get('/api/hello').send();

    expect({ status, body }).to.deep.equal({
      status: 200,
      body: 'Hello World',
    });
  });
});
