import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler,
} from 'chart.js';
import { useSelector } from 'react-redux';
import { calcChartDate } from './calculateDate';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler
);

export const options = () => {
	return {
		responsive: true,
		interaction: {
			mode: 'index',
			intersect: false,
		},
		stacked: false,
		plugins: {
			title: {
				display: true,
				text: '감염 현황 추이',
			},
		},
		scales: {
			y: {
				type: 'linear',
				display: false,
				position: 'left',
			},
			y1: {
				type: 'linear',
				display: false,
				position: 'right',
				grid: {
					drawOnChartArea: false,
				},
			},
		},
	};
};

/**
 ** covidState first value : null
 */
export function Datas(term) {
	const labels = calcChartDate(term, 'label');
	const covidState = useSelector((state) => state.covid.covidBasicInfo);
	const dateToStringArray = calcChartDate(term, 'states');

	const confirmed = covidState
		? dateToStringArray
				.map((date, idx) => [
					covidState[idx][date]?.DiffDecideCnt,
					covidState[idx][date]?.DiffDeathCnt,
				])
				.reverse()
		: ['0'];

	return {
		labels,
		datasets: [
			{
				label: '확진자',
				data: confirmed.map((item) => item[0]),
				borderColor: '#FF0000',
				backgroundColor: 'rgba(255, 0, 0, 0.2)',
				yAxisID: 'y1',
				fill: true,
			},
			{
				label: '사망자',
				data: confirmed.map((item) => item[1]),
				borderColor: '#3290ED',
				backgroundColor: 'rgba(50, 144, 237, 0.2)',
				yAxisID: 'y',
				fill: true,
			},
		],
	};
}
