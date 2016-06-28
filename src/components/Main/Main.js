import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import store from '../../store';
import TodoAppBarContainer from '../../containers/TodoAppBarContainer';
import TodoListContainer from '../../containers/TodoListContainer';

const Main = () => (
  <Provider store={store}>
    <View>
      <TodoAppBarContainer />
      <TodoListContainer />
    </View>
  </Provider>
);

export default Main;