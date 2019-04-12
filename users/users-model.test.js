const db = require('../data/dbConfig.js');
const Users = require('./users-model.js');

 describe('users model', () => {
    beforeEach(async () => {
        await db('users').truncate();
    });

    describe('insert', () => {
        it('should insert the provided users', async () => {
            await Users.insert({ name: 'Matt' });
            await Users.insert({ name: 'Corey' });
            await Users.insert({ name: 'Paige' });

            const users = await db('users');
            expect(users).toHaveLength(3);
        });

        it('should return the added user', async () => {
            const user = await Users.insert({ name: 'Matt' });

            expect(user.name).toBe('Matt');
        });
    })

    describe('get', () => {
        it('should get all users', async () => {
            await Users.insert({ name: 'Matt' });
            await Users.insert({ name: 'Corey' });

            const users = await Users.getAll();
            expect(users.length).toBe(2);
        });
    });
 });