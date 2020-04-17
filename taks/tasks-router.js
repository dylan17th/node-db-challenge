const express = require('express');
const Tasksdb = require('./task-model.js')
const router = express.Router();

router.get('/', (req,res)=>{
    Tasksdb.getListOfTasks()
    .then(tasks => res.status(200).json(tasks))
    .catch(err => res.status(500).json({message: err}))
})

router.post('/',taskValidation,  idValidate, (req,res)=>{
    const task = req.body;
    const project = res.proj_name;
    Tasksdb.addTask(task)
    .then(task => res.status(201).json({message: `added a task to ${project} project`}))
    .catch(err => res.status(500).json(err))
});

function idValidate(req,res,next){
    const id = req.body.project_id;
    Tasksdb.projectValidation(id)
    .then(arr => {
        if(arr.length > 0 ){
            res.proj_name = arr[0].name
            next()
        }else{
            return res.status(404).json({message: 'the project id that you entered does not exist'})
        }
    })
}
function taskValidation(req,res,next){
    const task = req.body;
    if(task.description !== undefined && task.project_id !== undefined && task.complete !== undefined){
        next()
    }else{
        res.status(404).json({message: 'missing a required field'})
    }
}

module.exports = router;