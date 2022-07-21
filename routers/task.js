const express = require('express');
const router = express.Router();
const {getAllTasks,getTasks,createTasks,patchTask,deleteTask,putTask} = require('../controller/task'); 

router.route('/').get(getAllTasks).post(createTasks)
router.route('/:id').get(getTasks).patch(patchTask).delete(deleteTask).put(putTask);

module.exports = router;

