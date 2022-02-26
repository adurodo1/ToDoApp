import mongoose from "mongoose";

import { TodoSchema } from "../models/todoModel";

const Todo= mongoose.model('todo',TodoSchema);


export const addNewTodo =(req,res)=>{

const newTodo = new Todo({activity:"First Deed"});

newTodo.save((err,todo)=>{
    if(err)
    res.send(err);
    res.json(todo);

})

}


export const getAllTodo=(req,res)=>{

    Todo.find({},(err,todolist)=>{

        if(err)
        res.send(err);
        res.json(todolist);
    });

}


export const getTodowithID=(req,res)=>{
    Todo.findById(req.params.TodoId,(err,todo)=>{

        if(err)
        res.send(err);
        res.json(todo);
    });

}

///////
//////