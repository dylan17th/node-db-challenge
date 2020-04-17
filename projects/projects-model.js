const db = require('../data/db-config.js');

module.exports = {
    getProjects,
    makeProject,
    getListOfTasks,
    addTask
}

function getProjects(){
    return db('projects')
}

function makeProject(project){
    return db('projects')
    .insert(project)
}
function getListOfTasks(){
    return db('taks')
}

function addTask(){
    return null
}