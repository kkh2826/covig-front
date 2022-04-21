/* eslint-disable no-unused-vars */
import { Box, Select } from '@chakra-ui/react';
import { Line } from 'react-chartjs-2';
import { options, Datas } from '../../utils';

function ChartBody() {
	return (
		<Box mx={4} my={20}>
			<Select width={'200px'}>
				<option value="일주일">일주일</option>
				<option value="일주일">2주</option>
				<option value="일주일">한달</option>
			</Select>
			<Line options={options} data={Datas(30)} />
		</Box>
	);
}

export default ChartBody;
