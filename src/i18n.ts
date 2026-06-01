import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
	ru: {
		translation: {
			'nav.available': 'Available for hire',
			'nav.contact': 'Contact in Telegram (@iam_guesss)',
			'about.title': 'О себе',
			'about.p1':
				'Привет! В моем профессиональном арсенале собраны ключевые технические навыки, которые могут стать надежной опорой для вашей компании.',
			'about.bullet1':
				'Опыт в программировании систем с нуля и разработке ИИ-решений.',
			'about.bullet2':
				'Глубокое понимание систем трекинга трафика (Keitaro, Binom, Alanbase).',
			'about.bullet3':
				'Умею настраивать любые PWA, Android, iOS приложения для залива под гемблу.',
			'skills.title': 'Навыки',
			'skills.tech_stack': 'Tech Stack',
			'skills.traffic': 'Traffic & Integrations',
			'skills.cloaking': 'Cloaking & Safety',
			'skills.ai': 'AI & Automation',
			'skills.infrastructure': 'Infrastructure',
			'skills.items.cloaking': 'Клоакинг',
			'skills.items.antidetect': 'Антидетект-браузеры',
			'skills.items.pwa': 'Настройка PWA',
			'skills.items.apps': 'iOS/Android Apps для залива',
			'skills.items.ai_agents': 'ИИ-агенты',
			'skills.items.ai_solutions': 'Разработка ИИ-решений',
			'skills.items.tg_bots': 'Telegram-боты',
			'skills.items.automation': 'Автоматизация баеров',
			'skills.items.admin': 'Администрирование серверов',
			'skills.items.domains': 'Домены',
			'skills.items.monitoring': 'Мониторинг стабильности',
			'experience.title': 'Опыт работы',
			'exp.tasks_achievements': '# Задачи и достижения',
			'exp.flexifai.role': 'AI & Tracking Integrator',
			'exp.flexifai.duration': '9 мес.',
			'exp.flexifai.desc':
				'Разработка ИИ-решений и внедрение архитектур для обработки данных. Оптимизация трафика и автоматизация.',
			'exp.flexifai.h1': 'Разработка ИИ-решений и систем для обработки данных',
			'exp.flexifai.h2': 'Оптимизация трафика в основных вертикалях',
			'exp.flexifai.h3': 'Разработка внутреннего софта для оптимизации работы',
			'exp.flexifai.h4': 'Создание и поддержка Telegram-ботов',
			'exp.flexifai.h5':
				'Настройка, администрирование и внедрение трекера Keitaro',
			'exp.melbet.role': 'Technical Integrator',
			'exp.melbet.duration': '8 мес.',
			'exp.melbet.desc':
				'Настройка Keitaro, управление рекламными кампаниями и подключение источников трафика.',
			'exp.melbet.h1':
				'Настройка Keitaro, управление кампаниями и подключение источников трафика (сорсов)',
			'exp.melbet.h2':
				'Оптимизация текущих воронок и постоянный мониторинг систем',
			'exp.melbet.h3': 'Разработка внутренних технических проектов',
			'exp.melbet.h4': 'Работа с клоакингом и полное администрирование доменов',
			'exp.melbet.h5': 'Работа с отчетами и глубокая техническая аналитика',
			'exp.hunters.role': 'Technical Integrator',
			'exp.hunters.duration': '1+ год',
			'exp.hunters.desc':
				'Вертикаль: Gambling, Telegram channels. Оптимизация трафика, API-интеграции и техническое обеспечение.',
			'exp.hunters.h1': 'Оптимизация трафика, полная настройка трекера Keitaro',
			'exp.hunters.h2': 'Интеграции через postback и API',
			'exp.hunters.h3':
				'Разработка внутренних проектов (Node.js, React, FB API Conversions)',
			'exp.hunters.h4':
				'Создание систем отчетов и статистики (PHP, Google Looker, Keitaro API)',
			'exp.hunters.h5': 'Администрирование серверов и доменов',
			'exp.mugnus.role': 'Technical Integrator',
			'exp.mugnus.duration': '1.5 года',
			'exp.mugnus.desc':
				'Вертикаль: Crypto. Разработка инфраструктуры для обработки крипто-трафика.',
			'exp.mugnus.h1': 'Управление трекерами Keitaro и Binom',
			'exp.mugnus.h2': 'Создание и разработка вайтов',
			'exp.mugnus.h3': 'Администрирование серверов и доменов',
			'exp.mugnus.h4': 'Настройка клоакинга и API-интеграций',
			'exp.mart.role': 'Web Developer',
			'exp.mart.duration': '1+ год',
			'exp.mart.desc':
				'Разработка веб-сайтов под ключ (лендинги, e-commerce, панели управления).',
			'exp.mart.h1': 'Создание функциональных веб-проектов с нуля',
			'exp.mart.h2': 'Использование JavaScript, PHP, SQL, WordPress',
			'education.title': 'Образование',
			'education.degree': 'Бакалавр',
			'education.uni':
				'Государственный университет интеллектуальных технологий и связи (ОНАС им. А.С. Попова), Одесса',
		},
	},
	en: {
		translation: {
			'nav.available': 'Available for hire',
			'nav.contact': 'Contact in Telegram (@iam_guesss)',
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
}

i18n.use(initReactI18next).init({
	resources,
	lng: 'ru',
	fallbackLng: 'ru',
	interpolation: {
		escapeValue: false,
	},
})

export default i18n
