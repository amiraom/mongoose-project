const express =require('express');
const { CreatePerson} = require('../controllers/controller');
const PersonRouter =express.Router();
PersonRouter.post('/add',CreatePerson);

module.exports=PersonRouter;