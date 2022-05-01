import { Select } from '@chakra-ui/react';
import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';

function SelectLanguage() {
	const { t } = useTranslation(['page']);

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};

	const handleLanguage = (e) => {
		const { value } = e.target;

		changeLanguage(value ? 'en' : 'ko');
	};

	return (
		<Select
			placeholder={t('page:languageOptions.korean')}
			size="xs"
			w="100px"
			h="32px"
			onChange={handleLanguage}
		>
			<option value="en">{t('page:languageOptions.english')}</option>
		</Select>
	);
}

export default SelectLanguage;
