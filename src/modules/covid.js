/* eslint-disable no-unused-vars */
import { handleActions } from 'redux-actions';
import * as api from '../lib/api';

const GET_COVIDBASICINFO = 'covid/GET_COVIDBASICINFO';
const GET_COVIDBASICINFO_SUCCESS = 'covid/GET_COVIDBASICINFO_SUCCESS';
const GET_COVIDBASICINFO_FAILURE = 'covid/GET_COVIDBASICINFO_FAILURE';

export const getCovidBasicInfo = () => async (dispatch) => {
	dispatch({ type: GET_COVIDBASICINFO });

	try {
		const res = await api.getCovidBasicInfo();

		dispatch({
			type: GET_COVIDBASICINFO_SUCCESS,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: GET_COVIDBASICINFO_FAILURE,
			payload: err,
			error: true,
		});

		throw err;
	}
};

// 다른 데이터 추가 예정(...state 삭제X)
const initialState = {
	loading: {
		GET_COVIDBASICINFO: false,
	},
	covidBasicInfo: null,
};

const covid = handleActions(
	{
		[GET_COVIDBASICINFO]: (state) => ({
			...state,
			loading: {
				...state.loading,
				GET_COVIDBASICINFO: true,
			},
		}),
		[GET_COVIDBASICINFO_SUCCESS]: (state, action) => ({
			...state,
			loading: {
				...state.loading,
				GET_COVIDBASICINFO: false,
			},
			covidBasicInfo: action.payload,
		}),
		[GET_COVIDBASICINFO_FAILURE]: (state, action) => ({
			...state,
			loading: {
				...state.loading,
				GET_COVIDBASICINFO: false,
			},
			covidBasicInfo: action.payload,
		}),
	},
	initialState
);

export default covid;
