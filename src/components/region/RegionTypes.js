import { Grid, GridItem } from '@chakra-ui/react';

function RegionTypes() {
	return (
		<Grid
			templateColumns="repeat(5, 1fr)"
			gap={6}
			bgColor="#EFEFEF"
			rounded="lg"
			my="10"
			fontWeight="bold"
		>
			<GridItem
				w="100%"
				h="10"
				display="flex"
				alignItems="center"
				justifyContent="center"
			>
				시&middot;도명
			</GridItem>
			<GridItem
				w="100%"
				h="10"
				display="flex"
				alignItems="center"
				justifyContent="center"
				color="#FF6060"
			>
				일일 확진자
			</GridItem>
			<GridItem
				w="100%"
				h="10"
				display="flex"
				alignItems="center"
				justifyContent="center"
				color="#FF0000"
			>
				누적 확진자
			</GridItem>
			<GridItem
				w="100%"
				h="10"
				display="flex"
				alignItems="center"
				justifyContent="center"
				color="#7B79FC"
			>
				일일 사망자
			</GridItem>
			<GridItem
				w="100%"
				h="10"
				display="flex"
				alignItems="center"
				justifyContent="center"
				color="#0500FF"
			>
				누적 사망자
			</GridItem>
		</Grid>
	);
}

export default RegionTypes;
