export const calculateDate = () => {
	const current = new Date();
	const year = current.getFullYear();
	const month = current.getMonth() + 1;
	const date = current.getDate();
	const currentDate = `${year}${month < 10 ? `0${month}` : month}${
		date < 10 ? `0${date}` : date
	}`;

	return currentDate;
};
