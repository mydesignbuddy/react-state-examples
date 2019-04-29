import { combineReducers } from "redux";
import { ADD_ITEM, SET_ADD_FORM, CLEAR_ADD_FORM } from "./actions";

const initialStateForm = {
  currentItem: {
    text: "",
    key: ""
  }
};

const form = function(state = initialStateForm, action) {
  switch (action.type) {
    case SET_ADD_FORM:
      debugger;
      return {
        ...state,
        currentItem: {
          text: action.text
        }
      };
    case CLEAR_ADD_FORM:
      debugger;
      return {
        ...state,
        currentItem: {
          text: "",
          key: ""
        }
      };
    default:
      return state;
  }
};

const initialStateTodos = {
  items: []
};

const todos = function(state = initialStateTodos, action) {
  switch (action.type) {
    case ADD_ITEM:
      debugger;
      return {
        ...state,
        items: [
          ...state.items,
          {
            text: action.text,
            key: action.key
          }
        ]
      };
    //// Add case for deleteItem to change the state
    default:
      return state;
  }
};

const todoApp = combineReducers({
  todos,
  form
});

export default todoApp;
