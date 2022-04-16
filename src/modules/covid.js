/* eslint-disable no-unused-vars */
import { handleActions } from 'redux-actions';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';

const GET_COVIDBASICINFO = 'covid/GET_COVIDBASICINFO';
const GET_COVIDBASICINFO_SUCCESS = 'covid/GET_COVIDBASICINFO_SUCCESS';

export const getCovidBasicInfo = createRequestThunk(
	GET_COVIDBASICINFO,
	api.getCovidBasicInfoFetch
);

// 다른 데이터 추가 예정(...state 삭제X)
const initialState = {
	covidBasicInfo: null,
};

const covid = handleActions(
	{
		[GET_COVIDBASICINFO_SUCCESS]: (state, action) => ({
			...state,
			covidBasicInfo: action.payload,
		}),
	},
	initialState
);

export default covid;
