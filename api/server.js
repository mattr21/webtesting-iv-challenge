const express = require('express');

const users = require('../users/users-model.js');

const server = express();

server.use(express.json());

// write endpoints here
server.post('/users', async (req, res) => {
    try{
        const user = await users.insert(req.body);
        res.status(201).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'server not creating' })
    }
})

server.get('/', async (req, res) => {
    const rows = await users.getAll();
  
    res.status(200).json(rows);
  });


module.exports = server;