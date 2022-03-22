import { AppName, LightSwitch, SelectLanguage } from '../components/header';
import { Box, Container, Flex } from '@chakra-ui/react';

function Main() {
	return (
		<Container border="1px" borderColor="gray.200" maxW="container.lg">
			{/* Header */}
			<Box border="1px" borderColor="gray.200" m={4}>
				<Flex justify="flex-end">
					<SelectLanguage />
				</Flex>
				<Flex justify="space-between">
					<AppName />
					<LightSwitch />
				</Flex>
			</Box>
		</Container>
	);
}

export default Main;
