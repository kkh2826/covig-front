import { Topic, OfferingData, CovidCard } from './index';
import { Box, Flex } from '@chakra-ui/react';
import { FaVirus } from 'react-icons/fa';
import { GiDeadWood } from 'react-icons/gi';

function Body() {
	return (
		<Box border="1px" borderColor="gray.200" m={4}>
			<Topic />
			<OfferingData />
			<Flex justify="space-between">
				<CovidCard
					title="전체 누적 확진자"
					total={7228550}
					addition={331162}
					icon={FaVirus}
				/>
				<CovidCard
					title="전체 누적 사망자"
					total={10800}
					addition={293}
					icon={GiDeadWood}
				/>
			</Flex>
		</Box>
	);
}

export default Body;
