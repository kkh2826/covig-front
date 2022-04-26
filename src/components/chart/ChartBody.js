/* eslint-disable no-unused-vars */
import { Box, Select } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { options, Datas } from '../../utils';

function ChartBody() {
	/**
	 ** default value : 7일
	 */
	const [terms, setTerms] = useState(7);

	const handleOptions = useCallback((e) => {
		setTerms(e.target.value);
	}, []);

	/**
	 ** options는 객체, Datas는 함수
	 */
	const _options = useCallback(() => options, []);
	const _data = useCallback(() => Datas(terms), [terms]);

	return (
		<Box mx={4} my={20}>
			<Box
				width={'100%'}
				display={'flex'}
				alignItems={'center'}
				justifyContent={'flex-end'}
			>
				<Select
					width={'10rem'}
					variant="flushed"
					borderColor={'#000000'}
					onChange={handleOptions}
				>
					<option value="7">일주일</option>
					<option value="14">2주</option>
					<option value="30">한달</option>
				</Select>
			</Box>
			<Line options={_options} data={_data()} />
		</Box>
	);
}

export default ChartBody;