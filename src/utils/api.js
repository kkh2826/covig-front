/* eslint-disable no-undef */

export const getCovidBasicInfoFetch = async () => {
	const res = await fetch(process.env.REACT_APP_COVID_FETCH_URL);
	const data = await res.json();

	return data;
};