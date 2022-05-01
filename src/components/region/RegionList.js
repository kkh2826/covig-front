import {
	Progress,
	Stat,
	StatArrow,
	Table,
	TableCaption,
	TableContainer,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { numberFormat } from '../../utils';
import { useTranslation } from 'react-i18next';

function RegionList() {
	const { t } = useTranslation(['page']);
	const data = useSelector((state) => state.covid.covidRegionInfo);
	const showAll = useSelector((state) => state.regionView.showAll);

	const tableItems = useCallback(() => {
		const result = showAll ? 0 : data.length - 1;

		return data?.slice(result).map((item) => {
			const { gubun, incDec, defCnt, diffDeathCnt, deathCnt } = item;

			return (
				<Tr key={gubun}>
					<Td isNumeric>
						{showAll ? t(`page:region.${gubun}`) : t('page:regionList.total')}
					</Td>
					<Td isNumeric>
						<Stat>
							<StatArrow type="increase" />
							{numberFormat(incDec)}
						</Stat>
					</Td>
					<Td isNumeric>{numberFormat(defCnt)}</Td>
					<Td isNumeric>
						<Stat>
							<StatArrow type="increase" />
							{numberFormat(diffDeathCnt)}
						</Stat>
					</Td>
					<Td isNumeric>{numberFormat(deathCnt)}</Td>
				</Tr>
			);
		});
	}, [data, showAll]);

	/* *
	 * * 데이터 불러들이는 동안 로딩
	 */
	if (data === null) {
		return <Progress size="xs" colorScheme="cyan" isIndeterminate />;
	}

	return (
		<TableContainer mt={5}>
			<Table variant="striped">
				<TableCaption placeContent="bottom">
					{t('page:regionList.text')}
				</TableCaption>
				<Thead>
					<Tr>
						<Th isNumeric fontSize={'1.0rem'}>
							{t('page:regionList.cities')}
						</Th>
						<Th isNumeric fontSize={'1.0rem'}>
							{t('page:regionList.dailyConfirmed')}
						</Th>
						<Th isNumeric fontSize={'1.0rem'}>
							{t('page:regionList.cumulativeConfirmed')}
						</Th>
						<Th isNumeric fontSize={'1.0rem'}>
							{t('page:regionList.dailyDeath')}
						</Th>
						<Th isNumeric fontSize={'1.0rem'}>
							{t('page:regionList.cumulativeDeath')}
						</Th>
					</Tr>
				</Thead>
				<Tbody>{tableItems()}</Tbody>
			</Table>
		</TableContainer>
	);
}

export default RegionList;
