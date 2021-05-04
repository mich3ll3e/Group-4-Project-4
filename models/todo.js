const mongoose = require("mongoose");
const schema= mongoose.Schema
const todoSchema = new schema({
    title:String,
    complete:{
        type:Boolean,
        default:false
    }
})
module.exports = Todo = mongoose.model("todo", todoSchema);
