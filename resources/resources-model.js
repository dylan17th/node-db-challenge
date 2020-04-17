const db = require('../data/db-config.js');

module.exports = {
    getResources,
    addResource,
    getResourceById
}

function getResources(){
    return db('resources')
}
function addResource(resource){
    return db('resources')
    .insert(resource)
}

function getResourceById(id){
    return db('resources')
    .where({id: id})
    .first()
}