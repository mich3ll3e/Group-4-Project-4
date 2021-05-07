const mongoose = require("mongoose");
const schema= mongoose.Schema
const todoSchema = new schema({
    title:{
        type: String,
        required: true
    },
    responsible:{
        type: String,
        required: true
    },
    complete:{
        type:Boolean,
        default:false
    }
})
module.exports = Todo = mongoose.model("todo", todoSchema);
