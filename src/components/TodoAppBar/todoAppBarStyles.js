import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
  },
  headerBar: {
    backgroundColor: '#00bcd4',
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
  },
  addTodoButton: {
    position: 'absolute',
    right: 10,
    top: 5,
  },
  inputContainer: {
    height: 45,
    flexDirection: 'row',
    flex: 1,
  },
  textInput: {
    flex: 1,
  },
  textInputButton: {
    height: 45,
    padding: 12,
    backgroundColor: '#ff5722',
  },
  textInputButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});