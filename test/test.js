// const request = require('supertest');
// const app = require('../index.js'); // Adjust this if needed
//
// test('Basic test', async () => {
//    const res = await request(app).get('/');
//    expect(res.statusCode).toBe(200);
// });

//222222222222 wala code
const request = require('supertest');
const app = require('../index.js'); // Import only the app (not starting a server)

test('Basic test', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
});
