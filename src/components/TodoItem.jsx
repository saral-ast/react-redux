import React from "react";
import { useDispatch } from "react-redux";
import { completeTodo, deleteTodo } from "../features/todo/todoSlice";

const TodoItem = ({ todo }) => {
  // console.log('Todo:',todo )
  const dispatch = useDispatch();
  // const onCompleteTodo = () => {
  //   dispatch({
  //     type: "todos/completedTodo",
  //     payload: todo.id,
  //   });
  // };
  // const onDeleteTodo = () => {
  //   dispatch({
  //     type: "todos/deletedTodo",
  //     payload: todo.id,
  //   });
  // };

  //toolkit
  const onCompleteTodo = () => {
    dispatch(completeTodo(todo.id));
  };
  const onDeleteTodo = () => {
    dispatch(deleteTodo(todo.id));
  };
  return (
    <div className="border-2 border-yellow-400 p-4 rounded mt-4 w-full max-w-2xl mx-auto bg-[#0d3b66] text-white">
      <h3 className={(todo.completed) ? `text-green-400` : `text-red-400`}>
        {todo.item}
      </h3>
      <div className="mt-2 flex gap-2">
        <button
          onClick={onCompleteTodo}
          className="bg-gray-300 text-black px-3 py-1 rounded"
        >
          Complete
        </button>
        <button
          onClick={onDeleteTodo}
          className="bg-red-600 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
