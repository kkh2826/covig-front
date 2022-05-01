import { Flex, Heading, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { regionExtend, regionReduction } from '../../modules/regionView';
import { useTranslation } from 'react-i18next';

function RegionHeader() {
	const [toggle, setToggle] = useState('off');
	const dispatch = useDispatch();
	const { t } = useTranslation(['page']);

	const handleLists = () => {
		if (toggle === 'off') {
			dispatch(regionExtend());
			setToggle('on');
		} else {
			dispatch(regionReduction());
			setToggle('off');
		}
	};

	return (
		<Flex alignItems="center" justifyContent="space-between">
			<Heading size="lg">{t('page:regionHeader.status')}</Heading>
			<Text
				fontWeight="bold"
				color="rgba(0, 184, 148, 1)"
				onClick={handleLists}
				cursor="pointer"
			>
				{toggle === 'off'
					? t('page:regionHeader.viewExtend')
					: t('page:regionHeader.viewReduction')}
			</Text>
		</Flex>
	);
}

export default RegionHeader;
