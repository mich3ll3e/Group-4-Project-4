const mongoose = require("mongoose");
const schema= mongoose.Schema
const todoSchema = new schema({
    title:{
        type: String,
        required: "Please enter a description",
        trim:true
    },
    responsible:{
        type: String,
        required: "Please enter a responsible",
        trime:true
    },
    complete:{
        type:Boolean, 
        default:false
    }
})
module.exports = Todo = mongoose.model("todo", todoSchema);
