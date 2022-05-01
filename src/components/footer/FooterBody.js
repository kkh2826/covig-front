/* eslint-disable no-unused-vars */
import {
	Center,
	Icon,
	Link,
	Table,
	TableCaption,
	TableContainer,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react';
import {
	Flex,
	Box,
	Spacer,
	Divider,
	SimpleGrid,
	Grid,
	GridItem,
} from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';

function FooterBody() {
	return (
		<>
			<Divider />
			<Box
				p={2}
				m={2}
				rounded={'lg'}
				boxShadow={'0px 4px 15px 5px rgba(0, 0, 0, 0.25)'}
			>
				<Grid templateColumns="repeat(2, 1fr)">
					<Center>
						<Link href="https://github.com/po4tion/covig-front" isExternal>
							<Icon as={AiFillGithub} w={8} h={8} />
						</Link>
						<Text>po4tion0429@gmail.com</Text>
					</Center>
					<Center>
						<Link href="https://github.com/kkh2826/COVIG_Back" isExternal>
							<Icon as={AiFillGithub} w={8} h={8} />
						</Link>
						<Text>kkh2826@naver.com</Text>
					</Center>
				</Grid>
			</Box>
		</>
	);
}

export default FooterBody;
