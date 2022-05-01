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
import { useTranslation } from 'react-i18next';

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

export function Options() {
	const { t } = useTranslation(['page']);

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
				text: t('page:chartHeader'),
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
}

/**
 ** covidState first value : null
 */
export function Datas(term) {
	const { t } = useTranslation(['page']);
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
				label: t('page:chartValue.confirmed'),
				data: confirmed.map((item) => item[0]),
				borderColor: '#FF9F1A',
				gradient: {
					backgroundColor: {
						axis: 'x',
						colors: {
							0: 'rgba(255, 175, 64, 0.5)',
							50: 'rgba(255, 175, 64, 0.25)',
							75: 'rgba(255, 175, 64, 0.1)',
							100: 'rgba(255, 175, 64, 0)',
						},
					},
				},
				yAxisID: 'y',
				fill: true,
			},
			{
				label: t('page:chartValue.deaths'),
				data: confirmed.map((item) => item[1]),
				borderColor: '#40739e',
				gradient: {
					backgroundColor: {
						axis: 'x',
						colors: {
							0: 'rgba(72, 126, 176, 0.5)',
							50: 'rgba(72, 126, 176, 0.25)',
							75: 'rgba(72, 126, 176, 0.1)',
							100: 'rgba(72, 126, 176, 0)',
						},
					},
				},
				yAxisID: 'y1',
				fill: true,
			},
		],
	};
}
