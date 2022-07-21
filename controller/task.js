const Task = require('../model/DataSchema');
const asyncwapper = require('../middleware/asyncware');
const {createCustomError} = require('../error/customError');

const getAllTasks = asyncwapper( async (req,res) =>{
        const task = await Task.find({});
        res.status(200).json({ task });
})
const createTasks = asyncwapper( async (req,res) =>{
        const task = await Task.create(req.body);
        res.status(201).json({ task });
})
const getTasks = asyncwapper( async (req,res,next) =>{
        const {id: taskID} = req.params ;
        const task = await Task.findOne({_id : taskID});
        if(!task) return next(createCustomError(`No Task with id : ${taskID}`,404));     
        res.status(200).json({task});
})
const patchTask = asyncwapper( async (req,res,next) =>{
        const {id : taskID} = req.params;
        const task = await Task.findOneAndUpdate({ _id: taskID}, req.body , 
            {new: true, runValidators: true});
        if(!task) return next(createCustomError(`No Task with id : ${taskID}`,404));
        res.status(200).json({task});

})
const deleteTask = asyncwapper( async (req,res,next) =>{
        const {id: taskID} = req.params;
        const task = await Task.findOneAndDelete({_id: taskID});
        if(!task) return next(createCustomError(`No Task with id : ${taskID}`,404));
        res.status(200).json({task});

})
const putTask = asyncwapper( async (req,res,next) => {
        const {id : taskID} = req.params;
        const task = await Task.findOneAndUpdate({ _id: taskID}, req.body , 
            {new: true, runValidators: true, overwrite: true});
        if(!task) return next(createCustomError(`No Task with id : ${taskID}`,404));
        res.status(200).json({task});

})
module.exports = {
    getAllTasks,
    getTasks,
    createTasks,
    patchTask,
    deleteTask,
    putTask
}