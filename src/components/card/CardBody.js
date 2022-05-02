/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { Topic, OfferingData, CovidCard } from './index';
import { Box, Flex } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getCovidBasicInfo } from '../../modules/covid';
import { calculateDate } from '../../utils';
import FaVirus from '@patternfly/react-icons/dist/esm/icons/virus-icon';
import BookDead from '@patternfly/react-icons/dist/esm/icons/book-dead-icon';

function Body() {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.covid.covidBasicInfo);

	useEffect(() => {
		dispatch(getCovidBasicInfo());
	}, []);

	const card = (type) => {
		const covidData = data[0][calculateDate()];

		if (type === 'decide') {
			return (
				<CovidCard
					title="전체 누적 확진자"
					total={+covidData.decideCnt}
					addition={+covidData.DiffDecideCnt}
					icon={FaVirus}
				/>
			);
		} else {
			return (
				<CovidCard
					title="전체 누적 사망자"
					total={+covidData.deathCnt}
					addition={+covidData.DiffDeathCnt}
					icon={BookDead}
				/>
			);
		}
	};

	return (
		<Box m={4}>
			<Topic />
			<OfferingData />
			<Flex justify="space-between">
				{data && (
					<>
						{card('decide')}
						{card('death')}
					</>
				)}
			</Flex>
		</Box>
	);
}

export default Body;
