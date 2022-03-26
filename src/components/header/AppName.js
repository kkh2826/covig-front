/* eslint-disable no-undef */
import { Center, Heading } from '@chakra-ui/react';

function AppName() {
	return (
		<Center>
			<Heading as="h1" size="3xl" userSelect="none">
				{process.env.REACT_APP_NAME}
			</Heading>
		</Center>
	);
}

export default AppName;
