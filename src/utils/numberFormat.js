export const numberFormat = (number) => {
	const _number = parseInt(number);

	return _number.toLocaleString('ko-kr');
};
