/* eslint-disable no-unused-vars */
import { createAction, handleActions } from 'redux-actions';

const EXTEND = 'covid/extend';
const REDUCTION = 'covid/REDUCTION';

export const regionExtend = createAction(EXTEND);
export const regionReduction = createAction(REDUCTION);

const initialState = {
	number: 18,
};

const regionView = handleActions(
	{
		[EXTEND]: (_) => ({
			number: 0,
		}),
		[REDUCTION]: (_) => ({
			number: 18,
		}),
	},
	initialState
);

export default regionView;
