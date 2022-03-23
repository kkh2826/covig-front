import { Center, Heading } from '@chakra-ui/react';
import { RepeatIcon } from '@chakra-ui/icons';

function Topic() {
	return (
		<Center border="1px" borderColor="gray.400" mb={6}>
			<Heading as="h2" size="lg">
				국내 감염 현황
			</Heading>
			<RepeatIcon ml={1} />
		</Center>
	);
}

export default Topic;
