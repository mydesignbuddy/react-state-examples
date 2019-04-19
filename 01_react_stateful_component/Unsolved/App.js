import React, { Component } from "react";
import TodoList from "./components/TodoList";
import TodoItems from "./components/TodoItems";

class App extends Component {
  inputElement = React.createRef();
  constructor() {
    super();
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: ""
      }
    };
  }
  deleteItem = key => {
    // delete logic goes here
  };

  handleInput = e => {
    // handle when input box changes
  };

  addItem = e => {
    e.preventDefault();
    // handle when form submitting "Add Task"
  };

  render() {
    return (
      <div className="App">
        <TodoList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
        <TodoItems entries={this.state.items} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;
