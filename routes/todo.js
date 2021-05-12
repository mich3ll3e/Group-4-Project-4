const express = require("express");
const router = express.Router();
const Todo = require("../../models/Todo");
//Get all the lists
router.get("/todos",(req, res) => {
    todo.find().then(todo=>res.json(todo))
})

//add a new todo
router.post("/todos", (req,res)=> {
    const newTodo = newTodo({
        title:req.body.title
    })
    newTodo.save().then(res=>res.json(todo))
})

router.delete("/todos/:id", (req, res) => {
    todo.findByIdAndDelete(req.params.id)
    .then(()=>res.json({ remove: true }))
});
