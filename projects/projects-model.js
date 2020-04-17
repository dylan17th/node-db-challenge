const db = require('../data/db-config.js');

module.exports = {
    getProjects,
    makeProject
}

function getProjects(){
    return db('projects')
}

function makeProject(project){
    return db('projects')
    .insert(project)
}