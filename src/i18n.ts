import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
	en: {
		translation: {
			'nav.available': 'Available for hire',
			'nav.contact': 'Contact in Telegram (@iam_guesss)',
			'nav.location': 'Odesa',
			'about.title': 'About Me',
			'about.p1':
				'Hello! I have a solid set of technical skills that can become a reliable foundation for your company.',
			'about.bullet1':
				'Experience in programming systems from scratch and developing AI solutions.',
			'about.bullet2':
				'Deep understanding of traffic tracking systems (Keitaro, Binom, Alanbase).',
			'about.bullet3':
				'Ability to set up any PWA, Android, iOS apps for gambling traffic.',
			'skills.title': 'Skills',
			'skills.tech_stack': 'Tech Stack',
			'skills.traffic': 'Traffic & Integrations',
			'skills.cloaking': 'Cloaking & Safety',
			'skills.ai': 'AI & Automation',
			'skills.infrastructure': 'Infrastructure',
			'skills.items.cloaking': 'Cloaking',
			'skills.items.antidetect': 'Anti-detect browsers',
			'skills.items.pwa': 'PWA Setup',
			'skills.items.apps': 'iOS/Android Apps for traffic',
			'skills.items.ai_agents': 'AI Agents',
			'skills.items.ai_solutions': 'AI Solutions Development',
			'skills.items.tg_bots': 'Telegram Bots',
			'skills.items.automation': 'Media Buyers Automation',
			'skills.items.admin': 'Server Administration',
			'skills.items.domains': 'Domains',
			'skills.items.monitoring': 'Stability Monitoring',
			'experience.title': 'Experience',
			'exp.tasks_achievements': '# Tasks and Achievements',
			'exp.flexifai.role': 'AI & Tracking Integrator',
			'exp.flexifai.duration': '9 mos.',
			'exp.flexifai.desc':
				'Development of AI solutions and implementation of data processing architectures. Traffic optimization and automation.',
			'exp.flexifai.h1': 'Developing AI solutions and data processing systems',
			'exp.flexifai.h2': 'Traffic optimization in core verticals',
			'exp.flexifai.h3':
				'Development of internal software for workflow optimization',
			'exp.flexifai.h4': 'Creation and maintenance of Telegram bots',
			'exp.flexifai.h5':
				'Setup, administration, and implementation of Keitaro tracker',
			'exp.melbet.role': 'Technical Integrator',
			'exp.melbet.duration': '8 mos.',
			'exp.melbet.desc':
				'Keitaro setup, ad campaigns management, and traffic sources integration.',
			'exp.melbet.h1':
				'Keitaro setup, campaign management, and traffic sources connection',
			'exp.melbet.h2':
				'Optimization of current funnels and continuous system monitoring',
			'exp.melbet.h3': 'Development of internal technical projects',
			'exp.melbet.h4': 'Cloaking and full domain administration',
			'exp.melbet.h5': 'Reporting and deep technical analytics',
			'exp.hunters.role': 'Technical Integrator',
			'exp.hunters.duration': '1+ yr',
			'exp.hunters.desc':
				'Vertical: Gambling, Telegram channels. Traffic optimization, API integrations, and technical support.',
			'exp.hunters.h1': 'Traffic optimization, full Keitaro tracker setup',
			'exp.hunters.h2': 'Integrations via postback and API',
			'exp.hunters.h3':
				'Internal projects development (Node.js, React, FB API Conversions)',
			'exp.hunters.h4':
				'Creation of reporting and stats systems (PHP, Google Looker, Keitaro API)',
			'exp.hunters.h5': 'Server and domain administration',
			'exp.mugnus.role': 'Technical Integrator',
			'exp.mugnus.duration': '1.5 yrs',
			'exp.mugnus.desc':
				'Vertical: Crypto. Infrastructure development for processing crypto traffic.',
			'exp.mugnus.h1': 'Keitaro and Binom trackers management',
			'exp.mugnus.h2': 'Creation and development of white pages',
			'exp.mugnus.h3': 'Server and domain administration',
			'exp.mugnus.h4': 'Cloaking and API integrations setup',
			'exp.mart.role': 'Web Developer',
			'exp.mart.duration': '1+ yr',
			'exp.mart.desc':
				'Turnkey website development (landing pages, e-commerce, admin panels).',
			'exp.mart.h1': 'Creating functional web projects from scratch',
			'exp.mart.h2': 'Using JavaScript, PHP, SQL, WordPress',
			'education.title': 'Education',
			'education.degree': "Bachelor's Degree",
			'education.uni':
				'State University of Intelligent Technologies and Telecommunications (SUITT), Odesa',
		},
	},
	uk: {
		translation: {
			'nav.available': 'Доступний до найму',
			'nav.contact': "Зв'язок в Telegram (@iam_guesss)",
			'nav.location': 'Одеса',
			'about.title': 'Про мене',
			'about.p1':
				'Привіт! У моєму професійному арсеналі зібрані ключові технічні навички, які можуть стати надійною опорою для вашої компанії.',
			'about.bullet1':
				'Досвід у програмуванні систем з нуля та розробці ШІ-рішень.',
			'about.bullet2':
				'Глибоке розуміння систем трекінгу трафіку (Keitaro, Binom, Alanbase).',
			'about.bullet3':
				'Вмію налаштовувати будь-які PWA, Android, iOS додатки для заливу під гемблу.',
			'skills.title': 'Навички',
			'skills.tech_stack': 'Tech Stack',
			'skills.traffic': 'Traffic & Integrations',
			'skills.cloaking': 'Cloaking & Safety',
			'skills.ai': 'AI & Automation',
			'skills.infrastructure': 'Infrastructure',
			'skills.items.cloaking': 'Клоакінг',
			'skills.items.antidetect': 'Антидетект-браузери',
			'skills.items.pwa': 'Налаштування PWA',
			'skills.items.apps': 'iOS/Android Apps для заливу',
			'skills.items.ai_agents': 'ШІ-агенти',
			'skills.items.ai_solutions': 'Розробка ШІ-рішень',
			'skills.items.tg_bots': 'Telegram-боти',
			'skills.items.automation': 'Автоматизація баєрів',
			'skills.items.admin': 'Адміністрування серверів',
			'skills.items.domains': 'Домени',
			'skills.items.monitoring': 'Моніторинг стабільності',
			'experience.title': 'Досвід роботи',
			'exp.tasks_achievements': '# Завдання та досягнення',
			'exp.flexifai.role': 'AI & Tracking Integrator',
			'exp.flexifai.duration': '9 міс.',
			'exp.flexifai.desc':
				'Розробка ШІ-рішень та впровадження архітектур для обробки даних. Оптимізація трафіку та автоматизація.',
			'exp.flexifai.h1': 'Розробка ШІ-рішень та систем для обробки даних',
			'exp.flexifai.h2': 'Оптимізація трафіку в основних вертикалях',
			'exp.flexifai.h3': 'Розробка внутрішнього софту для оптимізації роботи',
			'exp.flexifai.h4': 'Створення та підтримка Telegram-ботів',
			'exp.flexifai.h5':
				'Налаштування, адміністрування та впровадження трекера Keitaro',
			'exp.melbet.role': 'Technical Integrator',
			'exp.melbet.duration': '8 міс.',
			'exp.melbet.desc':
				'Налаштування Keitaro, управління рекламними кампаніями та підключення джерел трафіку.',
			'exp.melbet.h1':
				'Налаштування Keitaro, управління кампаніями та підключення джерел трафіку (сорсів)',
			'exp.melbet.h2':
				'Оптимізація поточних воронок та постійний моніторинг систем',
			'exp.melbet.h3': 'Розробка внутрішніх технічних проектів',
			'exp.melbet.h4': 'Робота з клоакінгом та повне адміністрування доменів',
			'exp.melbet.h5': 'Робота зі звітами та глибока технічна аналітика',
			'exp.hunters.role': 'Technical Integrator',
			'exp.hunters.duration': '1+ рік',
			'exp.hunters.desc':
				'Вертикаль: Gambling, Telegram channels. Оптимізація трафіку, API-інтеграції та технічне забезпечення.',
			'exp.hunters.h1':
				'Оптимізація трафіку, повне налаштування трекера Keitaro',
			'exp.hunters.h2': 'Інтеграції через postback та API',
			'exp.hunters.h3':
				'Розробка внутрішніх проектів (Node.js, React, FB API Conversions)',
			'exp.hunters.h4':
				'Створення систем звітів та статистики (PHP, Google Looker, Keitaro API)',
			'exp.hunters.h5': 'Адміністрування серверів та доменів',
			'exp.mugnus.role': 'Technical Integrator',
			'exp.mugnus.duration': '1.5 року',
			'exp.mugnus.desc':
				'Вертикаль: Crypto. Розробка інфраструктури для обробки крипто-трафіку.',
			'exp.mugnus.h1': 'Управління трекерами Keitaro та Binom',
			'exp.mugnus.h2': 'Створення та розробка вайтів',
			'exp.mugnus.h3': 'Адміністрування серверів та доменів',
			'exp.mugnus.h4': 'Налаштування клоакінгу та API-інтеграцій',
			'exp.mart.role': 'Web Developer',
			'exp.mart.duration': '1+ рік',
			'exp.mart.desc':
				'Розробка веб-сайтів під ключ (лендінги, e-commerce, панелі управління).',
			'exp.mart.h1': 'Створення функціональних веб-проектів з нуля',
			'exp.mart.h2': 'Використання JavaScript, PHP, SQL, WordPress',
			'education.title': 'Освіта',
			'education.degree': 'Бакалавр',
			'education.uni':
				"Державний університет інтелектуальних технологій і зв'язку (ДУІТЗ), Одеса",
		},
	},
}

i18n.use(initReactI18next).init({
	resources,
	lng: 'en',
	fallbackLng: 'en',
	interpolation: {
		escapeValue: false,
	},
})

export default i18n
