/* eslint-disable no-undef */
import { Center, Text } from '@chakra-ui/react';

function AppName() {
	return (
		<Center>
			<Text fontSize="6xl" fontWeight={700} userSelect="none">
				{process.env.REACT_APP_NAME}
			</Text>
		</Center>
	);
}

export default AppName;
