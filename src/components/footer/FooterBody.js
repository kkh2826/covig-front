import {
	Box,
	Grid,
	useMediaQuery,
	Center,
	Icon,
	Link,
	Text,
} from '@chakra-ui/react';
import Github from '@patternfly/react-icons/dist/esm/icons/github-icon';

function FooterBody() {
	const [isLargerThan550] = useMediaQuery('(max-width: 550px)');

	return (
		<Box
			mx={4}
			mb={10}
			p={4}
			rounded={'lg'}
			boxShadow={'0px 4px 15px 5px rgba(0, 0, 0, 0.25)'}
		>
			<Grid
				templateColumns={isLargerThan550 ? 'repeat(1, 1fr)' : 'repeat(2, 1fr)'}
			>
				<Center gap={2}>
					<Link
						href="https://github.com/po4tion/covig-front"
						isExternal
						aria-label="Github Link Icon Front"
					>
						<Icon as={Github} w={8} h={8} />
					</Link>
					<Text>po4tion0429@gmail.com</Text>
				</Center>
				<Center gap={2}>
					<Link
						href="https://github.com/kkh2826/COVIG_Back"
						isExternal
						aria-label="Github Link Icon Back"
					>
						<Icon as={Github} w={8} h={8} />
					</Link>
					<Text>kkh2826@naver.com</Text>
				</Center>
			</Grid>

			<Center>&copy; 2022 Copyright. COVIG Team</Center>
		</Box>
	);
}
export default FooterBody;
