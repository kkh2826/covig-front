import PropTypes from 'prop-types';
import {
	CircularProgress,
	CircularProgressLabel,
	Container,
	Flex,
	Heading,
	HStack,
	Icon,
	Text,
	Stat,
	StatArrow,
	StatNumber,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { numberFormat } from '../../utils';

function CovidCard({ title, total, addition, icon }) {
	const { t } = useTranslation(['page']);

	const leftSide = () => {
		const extTotal = total.toLocaleString('ko-KR');

		return (
			<Flex
				textAlign={'center'}
				w={'200px'}
				h={'170px'}
				maxH={'170px'}
				my={2}
				flexDirection={'column'}
				justify="space-between"
			>
				<Icon as={icon} w={12} h={12} />
				<Heading as="h3" size="md" my={2}>
					{title === '전체 누적 확진자'
						? t('page:cardConfirmed')
						: t('page:cardDeaths')}
				</Heading>
				<Text fontSize="3xl" fontWeight={700}>
					{extTotal}
				</Text>
			</Flex>
		);
	};

	/**
	 ** percentage graph 비율 30 곱셈
	 */
	const progress = () => {
		const percentage = ((addition / (total - addition)) * 100).toFixed(2);

		return (
			<CircularProgress
				value={(percentage * 30).toFixed(2)}
				color={title === '전체 누적 확진자' ? 'red.500' : '#504DFF'}
				size={'2.5em'}
				aria-label={title}
			>
				<CircularProgressLabel fontSize={'lg'} fontWeight={700}>
					{`${percentage}%`}
				</CircularProgressLabel>
			</CircularProgress>
		);
	};

	const stats = () => {
		return (
			<Flex>
				<Stat>
					<StatNumber
						color={title === '전체 누적 확진자' ? 'red.500' : '#504DFF'}
					>
						<StatArrow
							type="increase"
							color={title === '전체 누적 확진자' ? 'red.500' : '#504DFF'}
						/>
						{numberFormat(addition)}
					</StatNumber>
				</Stat>
			</Flex>
		);
	};

	return (
		<Container maxW="380px" w="100%" textAlign="center" m={0}>
			<HStack
				justify="space-around"
				boxShadow={'0px 4px 15px 5px rgba(0, 0, 0, 0.25)'}
				rounded={'lg'}
			>
				{leftSide()}
				<Flex
					h={'160px'}
					maxH={'160px'}
					flexDirection={'column'}
					justify="space-between"
				>
					{progress()}
					{stats()}
				</Flex>
			</HStack>
		</Container>
	);
}

export default CovidCard;

CovidCard.propTypes = {
	title: PropTypes.string.isRequired,
	total: PropTypes.number.isRequired,
	addition: PropTypes.number.isRequired,
	icon: PropTypes.func.isRequired,
};
