import { Box, Select } from '@chakra-ui/react';
import { useCallback, useState } from 'react';
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
		<Box
			mx={4}
			my={20}
			p={5}
			rounded={'lg'}
			boxShadow={'0px 4px 15px 5px rgba(0, 0, 0, 0.25)'}
		>
			<Box
				width={'100%'}
				display={'flex'}
				alignItems={'center'}
				justifyContent={'flex-end'}
			>
				<Select
					width={'10rem'}
					variant="filled"
					borderColor={'#000000'}
					onChange={handleOptions}
				>
					<option value="7">1 Week</option>
					<option value="14">2 Weeks</option>
					<option value="21">3 Weeks</option>
					<option value="30">1 Month</option>
				</Select>
			</Box>
			<Line options={_options()} data={_data()} />
		</Box>
	);
}

export default ChartBody;
