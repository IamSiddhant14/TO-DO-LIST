// Thsi file is the entry point to all the routes

const express = require('express');
const router = express.Router();
const homecontroller = require('../controllers/home_con')

// this will render the todo list on the browser
router.get('/',homecontroller.home);

// this middleware will take us to the "create" in the same folder which has a router which is connected to its respective controller
router.use('/create',require('./create'))

// this middleware will take us to the "delete" in the same folder which has a router which is connected to its respective controller
router.use('/delete',require('./delete'))

module.exports = router;