import { HelmetProvider } from 'react-helmet-async';
import { HeaderBody } from '../components/header';
import { CardBody } from '../components/card';
import { Container } from '@chakra-ui/react';
import { ChartBody } from '../components/chart';
import { RegionBody } from '../components/region';
import { FooterBody } from '../components/footer';
import SEO from '../components/seo';
import { useEffect } from 'react';
import { getCovidBasicInfoFetch, getCovidRegionInfoFetch } from '../utils/api';

function Main() {
	useEffect(async () => {
		const a = await getCovidRegionInfoFetch();
		const b = await getCovidBasicInfoFetch();

		console.log(a);
		console.log(b);
	}, []);

	return (
		<HelmetProvider>
			<SEO />
			<Container maxW="container.lg" sx={{ height: '100%' }}>
				<HeaderBody />
				<CardBody />
				<ChartBody />
				<RegionBody />
				<FooterBody />
			</Container>
		</HelmetProvider>
	);
}

export default Main;
