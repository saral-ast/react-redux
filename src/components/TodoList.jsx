import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectTodos } from "../features/todo/todoSlice";

const TodoList = () => {
    // const selectTodos = useSelector(selectTodos)
    // const returnedTodos = useSelector(selectTodos)
  const todos = useSelector(selectTodos);

   

    //  const displayTodos = returnedTodos.map((todo) => (
    //    <TodoItem key={todo.id} todo={todo} />
    //  ));
  const displayTodos = todos.map((todo) => (
     <TodoItem key={todo.id} todo={todo} />
  ));
    
     
  return (
    <div className="mt-6">
        {displayTodos}
    </div>
  );
};

export default TodoList;
