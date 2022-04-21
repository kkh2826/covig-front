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
	StatHelpText,
	StatArrow,
} from '@chakra-ui/react';

function CovidCard({ title, total, addition, icon }) {
	const leftSide = () => {
		const extTotal = total.toLocaleString('ko-KR');

		return (
			<Flex
				textAlign={'left'}
				h={'170px'}
				maxH={'170px'}
				my={2}
				flexDirection={'column'}
				justify="space-between"
			>
				<Icon as={icon} w={12} h={12} />
				<Heading as="h3" size="md" my={5}>
					{title}
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
				value={percentage * 30}
				color={title === '전체 누적 확진자' ? 'red.500' : '#504DFF'}
				size={'2.5em'}
			>
				<CircularProgressLabel fontSize={'lg'} fontWeight={700}>
					{`${percentage}%`}
				</CircularProgressLabel>
			</CircularProgress>
		);
	};

	const stats = () => {
		const extAddition = addition.toLocaleString('ko-KR');

		return (
			<Flex>
				<Stat>
					<StatHelpText
						fontSize={'xl'}
						color={title === '전체 누적 확진자' ? 'red.500' : '#504DFF'}
					>
						<StatArrow
							type="increase"
							color={title === '전체 누적 확진자' ? 'red.500' : '#504DFF'}
						/>
						{extAddition}
					</StatHelpText>
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
