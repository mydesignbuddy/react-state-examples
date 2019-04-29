import React from "react";
import TodoForm from "./components/TodoForm";
import TodoItems from "./components/TodoItems";

const App = () => {
  return (
    <div className="App">
      <TodoForm />
      <TodoItems />
    </div>
  );
};

export default App;
