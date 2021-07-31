//This controller will handle the responce recived by the todo list for creating the task
const express = require('express');
const router = express.Router();
const addcontroller = require('../controllers/addtask_con')



router.post('/',addcontroller.addtask)

module.exports = router;