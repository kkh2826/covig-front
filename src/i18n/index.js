import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en';
import ko from './locales/ko';

i18n.use(initReactI18next).init({
	resources: {
		en: en,
		ko: ko,
	},
	lng: 'ko',
	fallbackLng: 'en',
	ns: ['page'],
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
