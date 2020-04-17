const express = require('express');
const Resourcesdb = require('./resources-model.js');
const router = express.Router();

router.get('/', (req,res)=> {
    res.status(200).json({message: 'running'})
})

module.exports = router;