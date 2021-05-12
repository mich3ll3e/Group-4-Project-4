const express = require("express");
const router = express.Router();
const Todo = require("../../models/todo");
//Get all the lists
router.get("/todos/:id",(req, res) => {
    Todo.findById(req.params.id, function(err, todo){
        if(!todo)
        res.status(404).send("data is not found");
        else
        res.json(todo);
    })
})
//Get one 
router.get("/todos",(req, res) => {
    Todo.find().then(todo=>res.json(todo))
})
//add a new todo
router.post("/todos",async (req,res)=> {
    const newTodo = Todo({
        title:req.body.title,
        responsible:req.body.responsible
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
router.post("/todos/:id",(req,res)=>{
    Todo.findById(req.params.id, function(err, todo){
        if(!todo)
        res.status(404).send("data is not found");
        else
        todo.title=req.body.title,
        todo.responsible=req.body.responsible,
        todo.complete=req.body.complete
        todo.save().then(todo => {
            res.json('Todo updated!');
        })
        .catch(err => {
            res.status(400).send("Update not possible");
        });
        
    })
})

module.exports = router;