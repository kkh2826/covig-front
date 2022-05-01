import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCovidRegionInfo } from '../../modules/covid';
import RegionHeader from './RegionHeader';
import RegionList from './RegionList';

function RegionBody() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCovidRegionInfo());
	}, []);

	return (
		<Box
			p={5}
			mx={4}
			my={20}
			rounded={'lg'}
			boxShadow={'0px 4px 15px 5px rgba(0, 0, 0, 0.25)'}
		>
			<RegionHeader />
			<RegionList />
		</Box>
	);
}

export default RegionBody;
