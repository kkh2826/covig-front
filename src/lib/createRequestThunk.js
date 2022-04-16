import { startLoading, finishLoading } from '../modules/loading';

function createRequestThunk(type, request) {
	const SUCCESS = `${type}_SUCCESS`;
	const FAILURE = `${type}_FAILURE`;
	return (params) => async (dispatch) => {
		dispatch({ type });
		dispatch(startLoading(type));
		try {
			const response = await request(params);
			console.log('response:' + response);
			const payload = await response.data;

			dispatch({
				type: SUCCESS,
				payload,
			});
		} catch (e) {
			dispatch({
				type: FAILURE,
				payload: e,
				error: true,
			});
			console.error(e);
		} finally {
			dispatch(finishLoading(type));
		}
	};
}

export default createRequestThunk;
