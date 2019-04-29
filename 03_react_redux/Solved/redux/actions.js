/*
 * action types
 */

export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const SET_ADD_FORM = "SET_ADD_FORM";
export const CLEAR_ADD_FORM = "CLEAR_ADD_FORM";

export const addItem = text => {
  debugger;
  return { type: ADD_ITEM, text: text, key: Date.now() };
};

export const deleteItem = key => {
  debugger;
  return { type: DELETE_ITEM, key: key };
};

export const setAddForm = text => {
  debugger;
  return { type: SET_ADD_FORM, text: text };
};

export const clearAddForm = () => {
  debugger;
  return { type: CLEAR_ADD_FORM, text: "", key: "" };
};
