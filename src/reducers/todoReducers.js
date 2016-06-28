import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

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

const initialState = fromJS({
  todos: [],
  todo: {
    id: '',
    text: '',
    completed: false,
    updatedAt: Date.now(),
  },
  editId: '',
  isModalVisible: false,
});

const todoReducers = handleActions({
  CREATE_TODO: (state) => (
    state.set(
      'todos',
      state.get('todos').push(state.get('todo'))
    )
  ),

  UPDATE_TODO: (state, { payload }) => {
    const index = state.get('todos').findIndex((todo) => todo.get('id') === payload.id);
    return state.setIn(['todos', index, 'text'], 
      state.get('todo').get('text')
    );
  },

  DELETE_TODO: (state, { payload }) => {
    const index = state.get('todos').findIndex((todo) => todo.get('id') === payload.id);
    return state.set('todos', 
      state.get('todos').splice(index, 1)
    );
  },

  TOGGLE_TODO: (state, { payload }) => {
    const index = state.get('todos').findIndex((todo) => todo.get('id') === payload.id);
    return state.setIn(['todos', index, 'completed'], 
      !state.getIn(['todos', index, 'completed'])
    );
  },

  TOGGLE_MODAL: (state, { payload }) => (
    state.set('isModalVisible', 
      !state.get('isModalVisible')
    )
  ),

  TOOGLE_EDIT_MODE: (state, { payload }) => (
    state.set('editId', payload.id)
  ),

  SET_TODO: (state, { payload }) => (
    state.set('todo', state.get('todo').merge(payload))
  ),

  CHANGE_TODO_INPUT: (state, { payload }) => (
    state.setIn(['todo', 'text'], payload.text)
  ),
}, initialState);

export default todoReducers
