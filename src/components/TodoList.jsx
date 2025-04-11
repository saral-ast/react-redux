import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import { useState } from "react";
import { useSelector } from "react-redux";

const TodoList = () => {
    const selectTodos = (state) =>state.todos
    const returnedTodos = useSelector(selectTodos)
    // console.log("All Todos",returnedTodos)

     const displayTodos = returnedTodos.map((todo) => (
       <TodoItem key={todo.id} todo={todo} />
     ));
    
     
  return (
    <div className="mt-6">
        {displayTodos}
    </div>
  );
};

export default TodoList;
