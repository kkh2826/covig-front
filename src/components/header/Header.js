import { AppName, SelectLanguage, ColorModeSwitcher } from './index';
import { Box, Flex } from '@chakra-ui/react';

function Header() {
	return (
		<Box border="1px" borderColor="gray.200" m={4}>
			<Flex justify="flex-end">
				<SelectLanguage />
			</Flex>
			<Flex justify="space-between">
				<AppName />
				<ColorModeSwitcher />
			</Flex>
		</Box>
	);
}

export default Header;
