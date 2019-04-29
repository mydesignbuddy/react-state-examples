import React, { useEffect } from "react";
import PropTypes from "proptypes";

const TodoForm = props => {
  // ref is a way for React to reference a DOM element in a safe way
  const inputElement = React.createRef();

  useEffect(() => {
    // adds focus to input field
    inputElement.current.focus();
  });

  const onTextChange = e => {
    props.setAddForm(e.target.value);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    props.addItem(props.currentItem.text);
    props.clearAddForm();
  };

  return (
    <div className="todoListMain">
      <div className="header">
        <form onSubmit={onFormSubmit}>
          <input
            placeholder="Task"
            ref={inputElement}
            value={props.currentItem.text}
            onChange={onTextChange}
          />
          <button type="submit"> Add Task </button>
        </form>
      </div>
    </div>
  );
};

TodoForm.propTypes = {
  currentItem: PropTypes.shape({
    text: PropTypes.string
  }),
  setAddForm: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
  clearAddForm: PropTypes.func.isRequired
};

TodoForm.defaultProps = {
  currentItem: {
    text: ""
  }
};

export default TodoForm;
