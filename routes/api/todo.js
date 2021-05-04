const express = require("express");
const router = express.Router();
const Todo = require("../../models/Todo");
//Get all the lists
router.get("/todos",(req, res) => {
    Todo.find().then(todo=>res.json(todo))
})

//add a new todo
router.post("/todos",async (req,res)=> {
    const newTodo = Todo({
        title:req.body.title
    })
    const savetodo= await newTodo.save();
    res.json(savetodo)
    // newTodo
    // .save()
    // .then(res=>res.json())
    // console.log("added");
})

router.delete("/todos/:id", (req, res) => {
    Todo.findByIdAndDelete(req.params.id)
    .then(()=>res.json({ remove: true }))
});

module.exports = router;