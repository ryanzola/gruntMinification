const supertest = require('supertest');
const app = require('../src/app');
const api = supertest(app);

const test = require('tape');

test('GET /message', t => {
  api
    .get('/message')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      if (err) {
        t.fail(err);
        t.end();
      } else {
				t.ok(res.body, 'It should have a response body');
				t.equals(res.body.message, 'hej tho', 'It should return a message parameter with the value hej tho');
				t.end();
			}
    });
});
