import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import Sun from '@patternfly/react-icons/dist/esm/icons/sun-icon';
import Moon from '@patternfly/react-icons/dist/esm/icons/moon-icon';

function ColorModeSwitcher(props) {
	const { toggleColorMode } = useColorMode();
	const text = useColorModeValue('dark', 'light');
	const SwitchIcon = useColorModeValue(Moon, Sun);

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
