import React, { useEffect } from "react";

const TodoList = props => {
  // useEffect is a new way to manage lifecycle events
  // similar to componentDidUpdate
  useEffect(() => {
    props.inputElement.current.focus();
  });

  return (
    <div className="todoListMain">
      <div className="header">
        <form onSubmit={props.addItem}>
          <input
            placeholder="Task"
            ref={props.inputElement}
            value={props.currentItem.text}
            onChange={props.handleInput}
          />
          <button type="submit"> Add Task </button>
        </form>
      </div>
    </div>
  );
};

export default TodoList;
