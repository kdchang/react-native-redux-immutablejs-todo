import React, { PropTypes } from 'react';
import { View, Text, TouchableOpacity, TextInput, Modal, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './todoAppBarStyles';

const TodoAppBar = ({ 
  todo,
  isModalVisible,
  onChangeTodoInput,
  onCreateTodo,
  onToggleModal,
}) => (
  <View style={styles.container}>
    <StatusBar
      hidden={true}
    />
    <View style={styles.headerBar}>
      <Text style={styles.headerText}>RN TodoApp</Text>
      <TouchableOpacity 
        onPress={onToggleModal}
        style={styles.addTodoButton}
      >
        <Icon 
          name="plus" 
          size={32} 
          color="#ffeb3b"
        />
      </TouchableOpacity> 
    </View>
    <Modal
      visible={isModalVisible}
      onRequestClose={onToggleModal}
      >
      <View style={[styles.container]}>
        <View style={[styles.innerContainer]}>
          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.textInput} 
              onChangeText={onChangeTodoInput} 
              placeholder="What do you want to do?"
            />
          </View>
          <TouchableOpacity 
            onPress={onCreateTodo}
            style={styles.textInputButton}
          >
            <Text style={styles.textInputButtonText}>Submit</Text>
          </TouchableOpacity> 
        </View>
      </View>
    </Modal>
  </View>
);

TodoAppBar.propTypes = {
  todo: PropTypes.object,
  onChangeTodoInput: PropTypes.func,
  onCreateTodo: PropTypes.func,
  onToggleModal: PropTypes.func,
}

TodoAppBar.defaultProps = {
  todo: {},
  onChangeTodoInput: () => {},
  onCreateTodo: () => {},
  onToggleModal: () => (() => {}),
}

export default TodoAppBar;