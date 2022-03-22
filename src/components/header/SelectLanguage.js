import { Select } from '@chakra-ui/react';

function SelectLanguage() {
	return (
		<Select placeholder="한국어" size="xs" w="100px" h="32px">
			<option value="english">영어</option>
		</Select>
	);
}

export default SelectLanguage;
