import { combineReducers } from 'redux';
import covid from './covid';
import loading from './loading';

const rootReducer = combineReducers({
	covid,
	loading,
});

export default rootReducer;
