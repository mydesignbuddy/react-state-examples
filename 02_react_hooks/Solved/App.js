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
    const filteredItems = items.filter(item => {
      return item.key !== key;
    });
    setItems(filteredItems);
  };

  const handleInput = e => {
    const itemText = e.target.value;
    setCurrentItem({ text: itemText, key: Date.now() });
  };

  const addItem = e => {
    e.preventDefault();
    const newItem = currentItem;
    if (newItem.text !== "") {
      const newItems = [...items, newItem];
      setItems(newItems);
      setCurrentItem({ text: "", key: "" });
    }
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
