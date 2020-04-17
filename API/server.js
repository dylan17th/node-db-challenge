const express = require('express');
const projectRouter = require('../projects/projects-router.js');
const server = express();

server.use(express.json());
server.use('/api/projects', projectRouter)

server.get('/', (req,res)=> {
    res.status(200).json({message: 'api running'})
})

module.exports = server; 
