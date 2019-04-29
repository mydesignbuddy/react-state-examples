import React from "react";
import PropTypes from "proptypes";

const TodoItems = props => {
  return (
    <ul className="theList">
      {props.items.map(item => {
        return (
          <li key={item.key} onClick={() => props.deleteItem(item.key)}>
            {item.text}
          </li>
        );
      })}
    </ul>
  );
};

TodoItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number,
      text: PropTypes.string
    })
  )
};

TodoItems.defaultProps = {
  items: []
};

export default TodoItems;
