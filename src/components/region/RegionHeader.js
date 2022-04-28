import { Flex, Heading, Text } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { regionExtend } from '../../modules/regionView';

function RegionHeader() {
	const dispatch = useDispatch();

	const handleLists = () => {
		console.log('클릭');
		dispatch(regionExtend());
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
