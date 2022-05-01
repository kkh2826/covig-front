import { Center, Heading, Tooltip } from '@chakra-ui/react';
import { RepeatIcon } from '@chakra-ui/icons';
import { useCallback } from 'react';

function Topic() {
	const refreshBtn = useCallback(() => {
		window.location.replace('/');
	}, []);

	return (
		<Center mb={10}>
			<Heading as="h2" size="lg">
				국내 감염 현황
			</Heading>
			<Tooltip label="새로고침">
				<RepeatIcon ml={2} w={8} h={8} cursor="pointer" onClick={refreshBtn} />
			</Tooltip>
		</Center>
	);
}

export default Topic;
