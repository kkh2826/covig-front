import { Topic, OfferingData } from './index';
import { Box } from '@chakra-ui/react';

function Body() {
	return (
		<Box border="1px" borderColor="gray.200" m={4}>
			<Topic />
			<OfferingData />
		</Box>
	);
}

export default Body;
