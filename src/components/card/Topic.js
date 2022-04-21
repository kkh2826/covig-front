import { Center, Heading } from '@chakra-ui/react';
import { RepeatIcon } from '@chakra-ui/icons';

function Topic() {
	return (
		<Center mb={10}>
			<Heading as="h2" size="lg">
				국내 감염 현황
			</Heading>
			<RepeatIcon ml={2} />
		</Center>
	);
}

export default Topic;
