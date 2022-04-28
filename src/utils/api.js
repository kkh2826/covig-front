/* eslint-disable no-undef */

export const getCovidBasicInfoFetch = async () => {
	const res = await fetch(`${process.env.REACT_APP_API_URL}/covidBasicinfo/`);
	const data = await res.json();

	return data;
};

export const getCovidRegionInfoFetch = async () => {
	const res = await fetch(`${process.env.REACT_APP_API_URL}/covidregioninfo/`);
	const data = await res.json();

	return data;
};
