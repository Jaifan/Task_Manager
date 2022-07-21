const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Must provide a name"],
        trim : true,
        maxlength : [20 , "Name can not be more than 20 Characters"]
    },
    completed : {
        type : Boolean,
        default : false
    }
    
}, {timestamps:true} )

module.exports = mongoose.model("Task", TaskSchema);

