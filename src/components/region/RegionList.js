/* eslint-disable no-unused-vars */
import {
	Center,
	Grid,
	GridItem,
	List,
	ListItem,
	Progress,
	Stat,
	StatArrow,
} from '@chakra-ui/react';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { numberFormat } from '../../utils';

function RegionList() {
	const data = useSelector((state) => state.covid.covidRegionInfo);
	const lists = useSelector((state) => state.regionView.number);

	const gridItems = useCallback(
		data?.slice(lists).map((item) => {
			return (
				<ListItem key={item.gubun}>
					<Grid templateColumns="repeat(5, 1fr)" gap={6}>
						<GridItem
							w="100%"
							h="10"
							display="flex"
							alignItems="center"
							justifyContent="center"
						>
							{item.gubun}
						</GridItem>
						<GridItem
							w="100%"
							h="10"
							color="#FF6060"
							display="flex"
							alignItems="center"
							justifyContent="center"
						>
							<Stat>
								<Center>
									<StatArrow type="increase" />
									{numberFormat(item.incDec)}
								</Center>
							</Stat>
						</GridItem>
						<GridItem
							w="100%"
							h="10"
							display="flex"
							alignItems="center"
							justifyContent="center"
							color="#FF0000"
						>
							{numberFormat(item.defCnt)}
						</GridItem>
						<GridItem
							w="100%"
							h="10"
							display="flex"
							alignItems="center"
							justifyContent="center"
							color="#7B79FC"
						>
							<Stat>
								<Center>
									<StatArrow type="increase" />
									{numberFormat(item.diffDeathCnt)}
								</Center>
							</Stat>
						</GridItem>
						<GridItem
							w="100%"
							h="10"
							display="flex"
							alignItems="center"
							justifyContent="center"
							color="#0500FF"
						>
							{numberFormat(item.deathCnt)}
						</GridItem>
					</Grid>
				</ListItem>
			);
		}),
		[data, lists]
	);

	/* *
	 * * 데이터 불러들이는 동안 로딩
	 */
	if (data === null) {
		return <Progress size="xs" colorScheme="cyan" isIndeterminate />;
	}

	return <List spacing={5}>{gridItems}</List>;
}

export default RegionList;
