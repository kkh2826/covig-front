import { Header } from '../components/header';
import { CardBody } from '../components/card';
import { Container } from '@chakra-ui/react';
import { ChartBody } from '../components/chart';

function Main() {
	return (
		<Container maxW="container.lg" sx={{ height: '100vh' }}>
			<Header />
			<CardBody />
			<ChartBody />
		</Container>
	);
}

export default Main;
