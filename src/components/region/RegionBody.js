import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCovidRegionInfo } from '../../modules/covid';
import RegionHeader from './RegionHeader';
import RegionList from './RegionList';
import RegionTypes from './RegionTypes';

function RegionBody() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCovidRegionInfo());
	}, []);

	return (
		<Box
			p={5}
			m={4}
			rounded={'lg'}
			boxShadow={'0px 4px 15px 5px rgba(0, 0, 0, 0.25)'}
		>
			<RegionHeader />
			<RegionTypes />
			<RegionList />
		</Box>
	);
}

export default RegionBody;
