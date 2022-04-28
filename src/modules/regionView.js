/* eslint-disable no-unused-vars */
import { createAction, handleActions } from 'redux-actions';

const EXTEND = 'covid/extend';
const REDUCTION = 'covid/REDUCTION';

export const regionExtend = createAction(EXTEND);
export const regionReduction = createAction(REDUCTION);

const initialState = {
	number: 9,
};

const regionView = handleActions(
	{
		[EXTEND]: (_) => ({
			number: 19,
		}),
		[REDUCTION]: (_) => ({
			number: 9,
		}),
	},
	initialState
);

export default regionView;
