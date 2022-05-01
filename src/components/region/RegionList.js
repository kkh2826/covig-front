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

function RegionList() {
	const data = useSelector((state) => state.covid.covidRegionInfo);
	const showAll = useSelector((state) => state.regionView.showAll);

	const tableItems = useCallback(() => {
		const result = showAll ? 0 : data.length - 1;

		return data?.slice(result).map((item) => {
			const { gubun, incDec, defCnt, diffDeathCnt, deathCnt } = item;

			return (
				<Tr key={gubun}>
					<Td isNumeric>{gubun}</Td>
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
					우리 모두 힘내서 코로나를 이겨냅시다.
				</TableCaption>
				<Thead>
					<Tr>
						<Th isNumeric fontSize={'1.2rem'}>
							시&middot;도명
						</Th>
						<Th isNumeric fontSize={'1.2rem'}>
							일일 확진자
						</Th>
						<Th isNumeric fontSize={'1.2rem'}>
							누적 확진자
						</Th>
						<Th isNumeric fontSize={'1.2rem'}>
							일일 사망자
						</Th>
						<Th isNumeric fontSize={'1.2rem'}>
							누적 사망자
						</Th>
					</Tr>
				</Thead>
				<Tbody>{tableItems()}</Tbody>
			</Table>
		</TableContainer>
	);
}

export default RegionList;
