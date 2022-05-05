/* eslint-disable no-undef */
import { Helmet } from 'react-helmet-async';

function SEO() {
	const desc = 'Covid-19 정보를 제공하는 웹 사이트입니다.';

	return (
		<Helmet>
			<meta name="description" content={desc} />
			<title>{process.env.REACT_APP_NAME}</title>
			<link rel="canonical" href={process.env.REACT_APP_URL} />
			<meta name="keyword" content="Covid, Corona, 코로나, 확진자, 사망자" />
			<meta
				property="og:title"
				content={`${process.env.REACT_APP_NAME} | 홈`}
			/>
			<meta property="og:url" content={process.env.REACT_APP_URL} />
			<meta property="og:type" content="website" />
			<meta property="og:site_name" content={process.env.REACT_APP_NAME} />
			<meta property="og:description" content={desc} />
			<meta name="google-site-verification" content={desc} />
			<meta name="naver-site-verification" content={desc} />
		</Helmet>
	);
}

export default SEO;
