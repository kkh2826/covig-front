import { Center, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

function OfferingData() {
	const { t } = useTranslation(['page']);

	return (
		<Center mb={10}>
			<Text fontSize="sm" fontWeight="600" color="#817474">
				{t('page:offeringData')}
			</Text>
		</Center>
	);
}

export default OfferingData;
