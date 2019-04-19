import React, { Component } from "react";

class TodoItems extends Component {
  createTasks = item => {
    return (
      <li key={item.key} onClick={/* bind deleteItem */}>
        {item.text}
      </li>
    );
  };

  render() {
    return <ul className="theList">{/* bind items here */}</ul>;
  }
}

export default TodoItems;
