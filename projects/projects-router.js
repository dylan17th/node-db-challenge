const express = require('express');
const Projectsdb = require('./projects-model.js')
const router = express.Router();

router.get('/', (req,res)=> {
    res.status(200).json({message: 'running'})
})

module.exports = router;