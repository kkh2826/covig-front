import { Center, useBoolean } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

function LightSwitch() {
	const [button, setButton] = useBoolean();

	const lightControl = () => {
		return button ? (
			<MoonIcon w={10} h={10} cursor="pointer" onClick={setButton.toggle} />
		) : (
			<SunIcon w={10} h={10} cursor="pointer" onClick={setButton.toggle} />
		);
	};

	return <Center>{lightControl()}</Center>;
}

export default LightSwitch;
