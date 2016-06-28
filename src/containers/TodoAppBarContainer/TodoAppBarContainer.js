import { connect } from 'react-redux';
import TodoAppBar from '../../components/TodoAppBar';
import uuid from 'uuid';

import {
  createTodo,
  setTodo,
  changeTodoInput,
  toggleModal,
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
    editMode: state.get('todoReducers').get('editMode'),
    isModalVisible: state.get('todoReducers').get('isModalVisible'),
  }),
  (dispatch) => ({
    onCreateTodo: () => {
      const id = uuid.v4();
      dispatch(setTodo({ id }));
      dispatch(createTodo());
      dispatch(setTodo(defaultTodo));
      dispatch(toggleModal());      
    },    
    onChangeTodoInput: (text) => (
      dispatch(changeTodoInput({ text })),
    ),
    onToggleModal: () => {
      dispatch(toggleModal());            
      dispatch(setTodo(defaultTodo));
    },
  })
)(TodoAppBar);