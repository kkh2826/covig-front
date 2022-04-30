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
import gradient from 'chartjs-plugin-gradient';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler,
	gradient
);

export const options = {
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
				gradient: {
					backgroundColor: {
						axis: 'x',
						colors: {
							0: 'rgba(255, 75, 43, 0.6)',
							50: 'rgba(255, 65, 108, 0.6)',
						},
					},
				},
				yAxisID: 'y1',
				fill: true,
			},
			{
				label: '사망자',
				data: confirmed.map((item) => item[1]),
				borderColor: '#3290ED',
				gradient: {
					backgroundColor: {
						axis: 'x',
						colors: {
							0: 'rgba(127, 127, 213, 0.6)',
							30: 'rgba(134, 168, 231, 0.6)',
							60: 'rgba(145, 234, 228, 0.6)',
						},
					},
				},
				yAxisID: 'y',
				fill: true,
			},
		],
	};
}
