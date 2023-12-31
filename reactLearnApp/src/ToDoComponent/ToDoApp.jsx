import { useState } from "react";
import AddToDo from "./AddToDo";
import ToDoList from "./ToDoList";
import Loading from "./Loading";

export function ToDoApp(){

    const [todoList, setToDoList]  =  useState([]);

    const addTodo = (text) => {
        setToDoList([...todoList, { text, id: todoList.length + 1 }]);
      };
    
      const deleteTodo = (id) => {
        setToDoList(todoList.filter((todo) => todo.id !== id));
      };

    return(
        <>
        <center>
        <ToDoList todoList = {todoList} deleteTodo = {deleteTodo}/>
        <AddToDo  addToDo =  {addTodo}/>
        </center>
        </>
    )
}