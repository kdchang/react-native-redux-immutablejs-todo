import { createStore, applyMiddleware } from 'redux';
import Immutable from 'immutable';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

const initialState = Immutable.Map();

export default createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk, createLogger({ stateTransformer: state => state.toJS() }))
);