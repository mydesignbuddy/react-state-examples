import React, { useState } from "react";
import TodoList from "./components/TodoList";
import TodoItems from "./components/TodoItems";

const App = () => {
  const inputElement = React.createRef();

  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({
    text: "",
    key: ""
  });

  const deleteItem = key => {
    // logic for deleting an item
  };

  const handleInput = e => {
    // logic for handling text input field
  };

  const addItem = e => {
    e.preventDefault();
    // logic for adding an item goes here
  };
  return (
    <div className="App">
      <TodoList
        addItem={addItem}
        inputElement={inputElement}
        handleInput={handleInput}
        currentItem={currentItem}
      />
      <TodoItems entries={items} deleteItem={deleteItem} />
    </div>
  );
};

export default App;
