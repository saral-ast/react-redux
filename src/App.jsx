import React from "react";
import TodoHeading from "./components/TodoHeading";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="min-h-screen bg-[#003049] px-4 py-6">
      <TodoHeading />
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
