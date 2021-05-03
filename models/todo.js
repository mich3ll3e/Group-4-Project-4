const mongoose = require("mongoose");
const schema= mongoose.schema
const todoSchema = new schema({
    title:String,
    complete:{
        type:Boolean,
        default:false
    }
})
module.exports = Todo = mongoose.model("todo", todoSchema);
