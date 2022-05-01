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
import { AiFillGithub } from 'react-icons/ai';

function FooterBody() {
	return (
		<Center
			border={'1px solid black'}
			width={'100vw'}
			left="0"
			position={'absolute'}
		>
			<Center
				my={20}
				p={5}
				rounded={'lg'}
				boxShadow={'0px 4px 15px 5px rgba(0, 0, 0, 0.25)'}
			>
				<TableContainer>
					<Table variant="simple">
						<TableCaption placement="bottom">
							이 웹사이트는 COVIG 개발진들에 의해 만들어졌습니다.
						</TableCaption>
						<Thead>
							<Tr>
								<Th>Github Repository</Th>
								<Th>Email</Th>
							</Tr>
						</Thead>
						<Tbody>
							<Tr>
								<Td>
									<Center>
										<Link
											href="https://github.com/po4tion/covig-front"
											isExternal
										>
											<Icon as={AiFillGithub} w={8} h={8} />
										</Link>
									</Center>
								</Td>
								<Td>po4tion0429@gmail.com</Td>
							</Tr>
							<Tr>
								<Td>
									<Center>
										<Link
											href="https://github.com/kkh2826/COVIG_Back"
											isExternal
										>
											<Icon as={AiFillGithub} w={8} h={8} />
										</Link>
									</Center>
								</Td>
								<Td>kkh2826@naver.com</Td>
							</Tr>
						</Tbody>
					</Table>
				</TableContainer>
			</Center>
		</Center>
	);
}

export default FooterBody;
