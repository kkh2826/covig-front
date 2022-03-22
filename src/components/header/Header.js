import { AppName, LightSwitch, SelectLanguage } from './index';
import { Box, Flex } from '@chakra-ui/react';

function Header() {
	return (
		<Box border="1px" borderColor="gray.200" m={4}>
			<Flex justify="flex-end">
				<SelectLanguage />
			</Flex>
			<Flex justify="space-between">
				<AppName />
				<LightSwitch />
			</Flex>
		</Box>
	);
}

export default Header;
