import React, { Component } from "react";

class TodoList extends Component {
  componentDidUpdate() {
    this.props.inputElement.current.focus();
  }
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={/* bind addItem */}>
            {" "}
            <input
              placeholder="Task"
              ref={this.props.inputElement}
              value="" // bind currentItem.text
              onChange="" // bind handleInput
            />
            <button type="submit"> Add Task </button>
          </form>
        </div>
      </div>
    );
  }
}

export default TodoList;
