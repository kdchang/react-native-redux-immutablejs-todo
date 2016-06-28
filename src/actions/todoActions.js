import { createAction } from 'redux-actions';
import {
  CREATE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  SET_TODO,
  TOGGLE_TODO,
  TOOGLE_EDIT_MODE,
  TOGGLE_MODAL,
  CHANGE_TODO_INPUT,
} from '../constants/actionTypes';

export const createTodo = createAction(CREATE_TODO);
export const updateTodo = createAction(UPDATE_TODO);
export const deleteTodo = createAction(DELETE_TODO);
export const setTodo = createAction(SET_TODO);
export const toggleTodo = createAction(TOGGLE_TODO);
export const toggleEditMode = createAction(TOOGLE_EDIT_MODE);
export const toggleModal = createAction(TOGGLE_MODAL);
export const changeTodoInput = createAction(CHANGE_TODO_INPUT);

