/* eslint-disable no-undef */

/*
	동규 버전
*/

// export const getCovidBasicInfo = async () => {
// 	const res = await fetch(process.env.REACT_APP_COVID_FETCH_URL);
// 	const data = await res.json();

// 	return data;
// };

/*
	경훈 버전
*/

export const getCovidBasicInfoFetch = () =>
	fetch(`process.env.REACT_APP_COVID_FETCH_URL`).catch((e) => console.error(e));
