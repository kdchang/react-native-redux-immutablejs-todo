import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  todoListRow: {
    height: 60,
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  todoListLeftItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 9,
  },
  avatar: {
    backgroundColor: '#9c27b0',
    width: 36,
    height: 36,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  textInput: {
    flex: 1,
  },
  todoText: {
    marginLeft: 10,
    fontSize: 20,        
  },
  todoCompletedText: {
    marginLeft: 10,
    fontSize: 20,  
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  todoListRightItem: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    marginRight: 5,
    padding: 5,
  }
});