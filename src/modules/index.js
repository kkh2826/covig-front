import { combineReducers } from 'redux';
import covid from './covid';
import loading from './loading';
import regionView from './regionView';

const rootReducer = combineReducers({
	covid,
	loading,
	regionView,
});

export default rootReducer;
