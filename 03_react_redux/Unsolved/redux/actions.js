/*
 * action types
 */

export const ADD_ITEM = "ADD_ITEM";
export const SET_ADD_FORM = "SET_ADD_FORM";
export const CLEAR_ADD_FORM = "CLEAR_ADD_FORM";

export const addItem = text => {
  debugger;
  return { type: ADD_ITEM, text: text, key: Date.now() };
};

export const setAddForm = text => {
  debugger;
  return { type: SET_ADD_FORM, text: text };
};

export const clearAddForm = () => {
  debugger;
  return { type: CLEAR_ADD_FORM, text: "", key: "" };
};

//// Add a deleteItem action that will disbatch the deleteItem reducer
