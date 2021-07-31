// this will delete the that contact who's is been send by clicking the checkbox

const express = require('express');
const router = express.Router();
const deletecontroller = require('../controllers/deletetask_con')



router.post('/',deletecontroller.deletetask)

module.exports = router;