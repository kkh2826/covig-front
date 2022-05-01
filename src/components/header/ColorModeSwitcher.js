import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

function ColorModeSwitcher(props) {
	const { toggleColorMode } = useColorMode();
	const text = useColorModeValue('dark', 'light');
	const SwitchIcon = useColorModeValue(FaMoon, FaSun);

	return (
		<IconButton
			mt={1}
			size="md"
			fontSize="lg"
			aria-label={`Switch to ${text} mode`}
			variant="ghost"
			color="current"
			onClick={toggleColorMode}
			icon={<SwitchIcon />}
			{...props}
		/>
	);
}

export default ColorModeSwitcher;
