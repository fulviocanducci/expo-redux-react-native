import { combineReducers } from 'redux';
import { counterReducer } from '../reducers/count';

const reducer = combineReducers({
  counter: counterReducer
});

export default reducer;
