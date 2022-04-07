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
	return (
		<Container maxW="380px" w="100%" textAlign="center" m={0}>
			<HStack
				justify="space-around"
				boxShadow={'0px 4px 15px 5px rgba(0, 0, 0, 0.25)'}
				rounded={'lg'}
			>
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
						{total.toLocaleString('ko-KR')}
					</Text>
				</Flex>
				<Flex
					h={'160px'}
					maxH={'160px'}
					flexDirection={'column'}
					justify="space-between"
				>
					<CircularProgress value={40} color="green.400" size={'2.5em'}>
						<CircularProgressLabel fontSize={'lg'} fontWeight={700}>
							+40%
						</CircularProgressLabel>
					</CircularProgress>
					<Flex>
						<Stat>
							<StatHelpText fontSize={'xl'}>
								<StatArrow type="increase" />
								{addition.toLocaleString('ko-KR')}
							</StatHelpText>
						</Stat>
					</Flex>
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
	icon: PropTypes.element.isRequired,
};
