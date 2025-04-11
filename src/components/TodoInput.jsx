import React, { useState } from "react";
import { useDispatch } from "react-redux";

const TodoInput = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const onInputTodo = (e) => {
     setInput(e.target.value);
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      addTodo()
      setInput("");
  }
  const addTodo = () => {
  
      dispatch({
        type: "todos/addedTodo",
        payload: {
          id: Date.now(),
          item: input,
          completed: false,
        },
      });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 mt-4 w-full max-w-2xl mx-auto"
    >
      <input
        type="text"
        placeholder="Enter the task for today"
        value={input}
        onChange={onInputTodo}
        className="flex-1 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white placeholder:text-feay-200"
      />
      <button
        type="submit"
        className="bg-yellow-400 hover:bg-yellow-300 text-black font-medium px-4 py-2 rounded"
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoInput;
