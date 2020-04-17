const db = require('../data/db-config.js');

module.exports = {
    getListOfTasks,
    addTask,
    projectValidation
}

function getListOfTasks(){
    return db('tasks as t')
    .join('projects as p','t.project_id','=','p.id')
    .select('p.name','p.descriptions','t.id','t.description','t.notes','t.complete');
}

function addTask(task){
    return db('tasks')
    .insert(task)
}

function projectValidation(project_id){
    return db('projects')
    .where({id :project_id})
}