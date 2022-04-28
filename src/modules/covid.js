/* eslint-disable no-unused-vars */
import { handleActions } from 'redux-actions';
import * as api from '../utils/api';
import createRequestThunk from '../utils/createRequestThunk';

/* *
 * * CovidBasic
 */
const GET_COVIDBASICINFO = 'covid/GET_COVIDBASICINFO';
const GET_COVIDBASICINFO_SUCCESS = 'covid/GET_COVIDBASICINFO_SUCCESS';
const GET_COVIDBASICINFO_FAILURE = 'covid/GET_COVIDBASICINFO_FAILURE';

export const getCovidBasicInfo = createRequestThunk(
	GET_COVIDBASICINFO,
	api.getCovidBasicInfoFetch
);

/* *
 * * CovidRegion
 */
const GET_COVIDREGIONINFO = 'covid/GET_COVIDREGIONINFO';
const GET_COVIDREGIONINFO_SUCCESS = 'covid/GET_COVIDREGIONINFO_SUCCESS';
const GET_COVIDREGIONINFO_FAILURE = 'covid/GET_COVIDREGIONINFO_FAILURE';

export const getCovidRegionInfo = createRequestThunk(
	GET_COVIDREGIONINFO,
	api.getCovidRegionInfoFetch
);

const initialState = {
	covidBasicInfo: null,
	covidRegionInfo: null,
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
		[GET_COVIDREGIONINFO_SUCCESS]: (state, action) => ({
			...state,
			covidRegionInfo: action.payload,
		}),
		[GET_COVIDREGIONINFO_FAILURE]: (state, action) => ({
			...state,
			covidRegionInfo: action.payload,
		}),
	},
	initialState
);

export default covid;
