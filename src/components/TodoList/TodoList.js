import React, { PropTypes } from 'react';
import { View, Text, TextInput, ListView, TouchableOpacity } from 'react-native';
import styles from './todoListStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

const TodoList = ({ 
  todo,
  todos,
  editId,
  onToggleTodo,
  onChangeTodoInput,
  onUpdateTodo,
  onEditTodo,
  onDeleteTodo,
}) => {
  const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => !immutable.is(r1, r2),
  })

  const renderRow = (rowData) => (
    <View style={styles.todoListRow}>
      <View style={styles.todoListLeftItem}>    
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{rowData.get('text')[0]}</Text>
        </View>
        {
          (editId === rowData.get('id')) ?           
            (<TextInput 
              style={styles.textInput} 
              onChangeText={onChangeTodoInput} 
              value={todo.get('text')}
            />)  
          :
          (<TouchableOpacity
            style={styles.button}
            onPress={onToggleTodo(rowData.get('id'))}
          >
            <Text 
              style={
                (rowData.get('completed') === false) ? styles.todoText : styles.todoCompletedText
              }
            >
              {rowData.get('text')}
            </Text>  
          </TouchableOpacity>)            
        }
      </View>       
      <View style={styles.todoListRightItem}>   
        { 
          (editId === rowData.get('id')) ? 
          (<TouchableOpacity 
            style={styles.button}
            onPress={onUpdateTodo(todo, rowData.get('id'))}
          >
            <Icon name="check-circle-o" size={26} />
          </TouchableOpacity>)   
          :
          (<TouchableOpacity 
            style={styles.button}
            onPress={onEditTodo(rowData.get('id'), rowData.get('text'))}
          >
            <Icon name="pencil-square-o" size={26} />
          </TouchableOpacity>)  
        } 
        <TouchableOpacity 
          style={styles.button}
          onPress={onDeleteTodo(rowData.get('id'))}
        >
          <Icon name="trash-o" size={26} />
        </TouchableOpacity>  
      </View>
    </View>
  )  

  return (
    <View style={styles.container}>
      <ListView 
        style={styles.listView}
        dataSource={ds.cloneWithRows(todos.toArray())}
        renderRow={renderRow} 
        enableEmptySections={true}
      />
    </View>
  );
}

TodoList.propTypes = {
  todo: PropTypes.object,
  todos: PropTypes.object,
  onToggleTodo: PropTypes.func,
  onChangeTodoInput: PropTypes.func,
  onUpdateTodo: PropTypes.func,
  onEditTodo: PropTypes.func,
  onDeleteTodo: PropTypes.func,
}

TodoList.defaultProps = {
  todo: {},
  todos: {},
  onToggleTodo: () => (() => {}),
  onChangeTodoInput: () => {},
  onUpdateTodo: () => (() => {}),
  onEditTodo: () => (() => {}),
  onDeleteTodo: () => (() => {}),
}

export default TodoList;