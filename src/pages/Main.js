import { HeaderBody } from '../components/header';
import { CardBody } from '../components/card';
import { Container } from '@chakra-ui/react';
import { ChartBody } from '../components/chart';
import { RegionBody } from '../components/region';
import { FooterBody } from '../components/footer';

function Main() {
	return (
		<Container maxW="container.lg" sx={{ height: '100vh' }}>
			<HeaderBody />
			<CardBody />
			<ChartBody />
			<RegionBody />
			<FooterBody />
		</Container>
	);
}

export default Main;
