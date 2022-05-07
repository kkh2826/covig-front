import axios from 'axios';
import { useEffect } from 'react';
import './App.css';
// import { Main } from './pages';

// function App() {
// 	return <Main />;
// }

function App() {
	const calling = async () => {
		await axios.get('/api/covidBasicinfo/').then((data) => console.log(data));
	};

	useEffect(async () => {
		await calling();
	});

	return <div>값 출력</div>;
}

export default App;
