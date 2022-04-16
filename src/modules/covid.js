/* eslint-disable no-unused-vars */
import { handleActions } from 'redux-actions';
import * as api from '../lib/api';
import { getCovidBasicInfoFetch } from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';

const GET_COVIDBASICINFO = 'covid/GET_COVIDBASICINFO';
const GET_COVIDBASICINFO_SUCCESS = 'covid/GET_COVIDBASICINFO_SUCCESS';
const GET_COVIDBASICINFO_FAILURE = 'covid/GET_COVIDBASICINFO_FAILURE';

/*
	경훈 버전
*/
export const getCovidBasicInfo = createRequestThunk(
	GET_COVIDBASICINFO,
	getCovidBasicInfoFetch
);

/*
	동규 버전
*/
// export const getCovidBasicInfo = () => async (dispatch) => {
// 	dispatch({ type: GET_COVIDBASICINFO });

// 	try {
// 		const res = await api.getCovidBasicInfo();

// 		dispatch({
// 			type: GET_COVIDBASICINFO_SUCCESS,
// 			payload: res.data,
// 		});
// 	} catch (err) {
// 		dispatch({
// 			type: GET_COVIDBASICINFO_FAILURE,
// 			payload: err,
// 			error: true,
// 		});

// 		throw err;
// 	}
// };

// 다른 데이터 추가 예정(...state 삭제X)
const initialState = {
	covidBasicInfo: [],
};

const covid = handleActions(
	{
		[GET_COVIDBASICINFO_SUCCESS]: (state, action) => ({
			...state,
			covidBasicInfo: action.payload,
		}),
		[GET_COVIDBASICINFO_FAILURE]: (state, action) => ({
			...state,
			covidBasicInfo: action.payload,
		}),
	},
	initialState
);

export default covid;
