import { Header } from '../components/header';
import { CardBody } from '../components/body';
import { Container } from '@chakra-ui/react';

function Main() {
	return (
		<Container border="1px" borderColor="gray.200" maxW="container.lg">
			<Header />
			<CardBody />
		</Container>
	);
}

export default Main;
