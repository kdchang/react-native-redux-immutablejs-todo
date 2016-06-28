import { connect } from 'react-redux';
import { Alert } from 'react-native';
import TodoList from '../../components/TodoList';
import uuid from 'uuid';

import {
  editId,
  updateTodo,
  deleteTodo,
  setTodo,
  changeTodoInput,
  toggleEditMode,
  toggleTodo,
} from '../../actions';

const defaultTodo = {
  id: '',
  text: '',
  completed: false,
  updatedAt: Date.now(),
};

export default connect(
  (state) => ({
    todo: state.get('todoReducers').get('todo'),
    todos: state.get('todoReducers').get('todos'),
    editId: state.get('todoReducers').get('editId'),
  }),
  (dispatch) => ({
    onEditTodo: (id, text) => (
      () => {
        dispatch(toggleEditMode({ id }));
        dispatch(setTodo({ text }));
      }
    ),    
    onChangeTodoInput: (text) => (
      dispatch(changeTodoInput({ text })),
    ),
    onUpdateTodo: (todo, id) => (
      () => {
        if (todo.get('text').length === 0) {
          Alert.alert('Error', 'Please key in your todo!', [{ text: 'OK' }]);
        } else {
          dispatch(updateTodo({ id }));
          dispatch(toggleEditMode({ id: '' }));
          dispatch(setTodo(defaultTodo));
        }
      }
    ),
    onDeleteTodo: (id) => (
      () => (
        dispatch(deleteTodo({ id }))
      )
    ),
    onToggleTodo: (id) => (
      () => (
        dispatch(toggleTodo({ id }))
      )
    ),
  })
)(TodoList);