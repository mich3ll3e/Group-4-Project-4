import React from 'react';
import TodoList from "../todo/todos-list";
import AddTodo from "../todo/add-todo";
import EditTodo from "../todo/edit-todo";
 
export const SidebarData =[
    {
        title: "Home",
        exact:true,
        path: "/dashboard",
        main: ()=> <TodoList />
    },
    {
        title:"Create Todo",
        path:"/dashboard/create",
        main: ()=> <AddTodo />
    },
    {
        title:"Edit Todo",
        path:"/dashboard/edit",
        main: ()=> <EditTodo />
    }
]