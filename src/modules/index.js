import { combineReducers } from 'redux';
import covid from './covid';

const rootReducer = combineReducers({
	covid,
});

export default rootReducer;
