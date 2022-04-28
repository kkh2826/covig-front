import { Header } from '../components/header';
import { CardBody } from '../components/card';
import { Container } from '@chakra-ui/react';
import { ChartBody } from '../components/chart';
import { RegionBody } from '../components/region';

function Main() {
	return (
		<Container maxW="container.lg" sx={{ height: '100vh' }}>
			<Header />
			<CardBody />
			<ChartBody />
			<RegionBody />
		</Container>
	);
}

export default Main;
