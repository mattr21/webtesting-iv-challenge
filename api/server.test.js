const request = require('supertest');
const server = require('./server.js');

describe('server.js', () => {
    describe('POST /users', () => {
        it('should respond with 201 CREATED', async () => {
            const response = await request(server)
                .post('/users')
                .send({ name: 'Matt' });

            expect(response.status).toBe(201);
        })
    });

    describe('GET /', () => {
        it('should respond with 200 OK', async () => {
            const response = await request(server).get('/');

            expect(response.status).toBe(200);
        });

        it('should return JSON', async () => {
            const response = await request(server).get('/');

            expect(response.type).toBe('application/json');
        })
    });
});
