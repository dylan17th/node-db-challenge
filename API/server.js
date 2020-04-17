const express = require('express');
const projectRouter = require('../projects/projects-router.js');
const resourcesRouter = require('../resources/resources-router.js');
const tasksRouter = require('../taks/tasks-router.js')
const server = express();

server.use(express.json());
server.use('/api/projects', projectRouter);
server.use('/api/resources', resourcesRouter);
server.use('/api/tasks', tasksRouter);

server.get('/', (req,res)=> {
    res.status(200).json({message: 'api running'})
})

module.exports = server; 
