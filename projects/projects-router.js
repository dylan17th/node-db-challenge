const express = require('express');
const Projectsdb = require('./projects-model.js')
const router = express.Router();

router.get('/', (req,res)=> {
    Projectsdb.getProjects()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => res.status(500).json({message: err}))
})

router.post('/', postValidation, (req,res)=> {
    const project = req.body;
    Projectsdb.makeProject(project)
        .then(project => res.status(201).json(project))
        .catch(err => res.status(500).json({message: err}))
})

function postValidation (req,res,next){
    if(req.body.name !== undefined && req.body.complete !== undefined){
        next()
    }else{
        return res.status(404).json({message: 'missing a field'})
    }
}

module.exports = router;