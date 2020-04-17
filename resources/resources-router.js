const express = require('express');
const Resourcesdb = require('./resources-model.js');
const router = express.Router();

router.get('/', (req,res)=> {
    Resourcesdb.getResources()
    .then(resources => res.status(200).json(resources))
    .catch(err => res.status(500).json({message: 'cant access database'}))
})

router.post('/', resourceValidation, (req,res)=>{
    const resource = req.body;
    Resourcesdb.addResource(resource)
    .then(resource => res.status(201).json(resource))
    .catch(err => res.status(500).json({message: err}))
})

function resourceValidation(req,res,next){
    const resource = req.body;
    resource.name !== undefined ? next() : res.status(404).json({message: 'you are missing a required field in the body'})
}

module.exports = router;