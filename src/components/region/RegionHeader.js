import { Flex, Heading, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { regionExtend, regionReduction } from '../../modules/regionView';

function RegionHeader() {
	const [toggle, setToggle] = useState('off');
	const dispatch = useDispatch();

	const handleLists = () => {
		if (toggle === 'off') {
			dispatch(regionExtend());
			setToggle('on');
		} else {
			dispatch(regionReduction());
			setToggle('off');
		}
	};

	return (
		<Flex alignItems="center" justifyContent="space-between">
			<Heading size="lg">시&middot;도별 현황</Heading>
			<Text color="#4CAB02" onClick={handleLists} sx={{ cursor: 'pointer' }}>
				전체 보기
			</Text>
		</Flex>
	);
}

export default RegionHeader;
