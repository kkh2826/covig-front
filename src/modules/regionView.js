/* eslint-disable no-unused-vars */
import { createAction, handleActions } from 'redux-actions';

const EXTEND = 'covid/extend';
const REDUCTION = 'covid/REDUCTION';

export const regionExtend = createAction(EXTEND);
export const regionReduction = createAction(REDUCTION);

const initialState = {
	showAll: false,
};

const regionView = handleActions(
	{
		[EXTEND]: (_) => ({
			showAll: true,
		}),
		[REDUCTION]: (_) => ({
			showAll: false,
		}),
	},
	initialState
);

export default regionView;
