const db = require('../data/db-config.js');

module.exports = {
    getProjects,
    makeProject,
    findProjectById
}

function getProjects(){
    return db('projects')
}

function makeProject(project){
    return db('projects')
    .insert(project)
}

function findProjectById(id){
    return db('projects')
    .where({id})
    .first()
}

