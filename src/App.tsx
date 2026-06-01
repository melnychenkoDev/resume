import {
	Mail,
	MapPin,
	Terminal,
	TerminalSquare,
	Briefcase,
	GraduationCap,
	Link2,
	Code,
	Shield,
	Network,
	Cpu,
	Smartphone,
} from 'lucide-react'
import React from 'react'

const skills = [
	{
		category: 'Tech Stack',
		items: [
			'TypeScript',
			'Node.js',
			'React.js',
			'PHP',
			'PostgreSQL',
			'Redis',
			'Docker',
			'Git',
			'RESTful APIs',
			'n8n',
		],
	},
	{
		category: 'Traffic & Integrations',
		items: [
			'Keitaro',
			'Binom',
			'Alanbase',
			'S2S/API Integration',
			'Postback Setup',
			'FB API Conversions',
		],
	},
	{
		category: 'Cloaking & Safety',
		items: [
			'Клоакинг',
			'Антидетект-браузеры',
			'Настройка PWA',
			'iOS/Android Apps для залива',
		],
	},
	{
		category: 'AI & Automation',
		items: [
			'ИИ-агенты',
			'Разработка ИИ-решений',
			'Telegram-боты',
			'Автоматизация баеров',
		],
	},
	{
		category: 'Infrastructure',
		items: [
			'Администрирование серверов',
			'Домены',
			'Мониторинг стабильности',
			'Google Looker',
		],
	},
]

const experience = [
	{
		company: 'FlexifAI',
		role: 'AI & Tracking Integrator',
		duration: '9 мес.',
		description:
			'Разработка ИИ-решений и внедрение архитектур для обработки данных. Оптимизация трафика и автоматизация.',
		highlights: [
			'Разработка ИИ-решений и систем для обработки данных',
			'Оптимизация трафика в основных вертикалях',
			'Разработка внутреннего софта для оптимизации работы',
			'Создание и поддержка Telegram-ботов',
			'Настройка, администрирование и внедрение трекера Keitaro',
		],
	},
	{
		company: 'Melbet',
		role: 'Technical Integrator',
		duration: '8 мес.',
		description:
			'Настройка Keitaro, управление рекламными кампаниями и подключение источников трафика.',
		highlights: [
			'Настройка Keitaro, управление кампаниями и подключение источников трафика (сорсов)',
			'Оптимизация текущих воронок и постоянный мониторинг систем',
			'Разработка внутренних технических проектов',
			'Работа с клоакингом и полное администрирование доменов',
			'Работа с отчетами и глубокая техническая аналитика',
		],
	},
	{
		company: 'HUNTERS',
		role: 'Technical Integrator',
		duration: '1+ год',
		description:
			'Вертикаль: Gambling, Telegram channels. Оптимизация трафика, API-интеграции и техническое обеспечение.',
		highlights: [
			'Оптимизация трафика, полная настройка трекера Keitaro',
			'Интеграции через postback и API',
			'Разработка внутренних проектов (Node.js, React, FB API Conversions)',
			'Создание систем отчетов и статистики (PHP, Google Looker, Keitaro API)',
			'Администрирование серверов и доменов',
		],
	},
	{
		company: 'MUGNUS',
		role: 'Technical Integrator',
		duration: '1.5 года',
		description:
			'Вертикаль: Crypto. Разработка инфраструктуры для обработки крипто-трафика.',
		highlights: [
			'Управление трекерами Keitaro и Binom',
			'Создание и разработка вайтов',
			'Администрирование серверов и доменов',
			'Настройка клоакинга и API-интеграций',
		],
	},
	{
		company: 'Mart',
		role: 'Web Developer',
		duration: '1+ год',
		description:
			'Разработка веб-сайтов под ключ (лендинги, e-commerce, панели управления).',
		highlights: [
			'Создание функциональных веб-проектов с нуля',
			'Использование JavaScript, PHP, SQL, WordPress',
		],
	},
]

export default function App() {
	return (
		<div className='min-h-screen bg-gesh-black text-gesh-white font-sans selection:bg-gesh-green selection:text-gesh-black pb-12'>
			{/* Navbar area */}
			<nav className='sticky top-0 z-50 border-b border-white/10 bg-gesh-black/80 backdrop-blur-md'>
				<div className='max-w-6xl mx-auto px-6 h-16 flex items-center justify-between'>
					<div className='flex items-center gap-3'>
						<div className='w-8 h-8 rounded-md bg-gesh-green/20 flex items-center justify-center border border-gesh-green/50 shadow-[0_0_15px_rgba(180,216,0,0.3)]'>
							<TerminalSquare className='w-4 h-4 text-gesh-green' />
						</div>
						<span className='font-display font-bold text-lg tracking-wide uppercase text-white'>
							Gleb <span className='text-gesh-green'>Melnichenko</span>
						</span>
					</div>
					<div className='hidden sm:flex gap-4'>
						<a
							href='mailto:wgagleb@gmail.com'
							className='text-sm font-mono text-gray-400 hover:text-gesh-cyan transition-colors flex items-center gap-2'
						>
							<Mail className='w-4 h-4' /> wgagleb@gmail.com
						</a>
						<span className='text-sm font-mono text-gray-400 flex items-center gap-2'>
							<MapPin className='w-4 h-4' /> Одесса
						</span>
					</div>
				</div>
			</nav>

			<main className='max-w-6xl mx-auto px-4 sm:px-6 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10'>
				{/* Sidebar / Profile summary */}
				<aside className='lg:col-span-4 flex flex-col gap-8'>
					<div className='bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur hover:border-gesh-cyan/50 hover:shadow-[0_0_30px_rgba(0,229,255,0.1)] transition-all duration-300'>
						<h1 className='font-display text-4xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400'>
							Technical Integrator <br />
							<span className='text-xl text-gesh-green font-medium'>
								& Developer
							</span>
						</h1>
						<p className='text-gray-400 font-mono text-sm mt-4 flex items-center gap-2'>
							<span className='w-2 h-2 rounded-full bg-gesh-green animate-pulse inline-block'></span>
							Available for hire
						</p>
						<div className='mt-6 flex flex-col gap-3'>
							<a
								href='https://t.me/iam_guesss'
								target='_blank'
								rel='noreferrer'
								className='flex items-center gap-2 bg-gesh-green text-gesh-black px-4 py-2.5 rounded-xl font-medium text-sm hover:bg-[#c9f000] hover:shadow-[0_0_15px_rgba(180,216,0,0.4)] transition-all uppercase tracking-wider justify-center'
							>
								Contact in Telegram (@iam_guesss)
							</a>
						</div>
					</div>

					<div className='flex flex-col gap-6'>
						<h3 className='font-display text-xl border-l-2 border-gesh-cyan pl-3'>
							О себе
						</h3>
						<div className='text-gray-300 text-sm leading-relaxed space-y-4'>
							<p>
								Привет! В моем профессиональном арсенале собраны ключевые
								технические навыки, которые могут стать надежной опорой для
								вашей компании.
							</p>
							<div className='bg-gesh-dark p-4 rounded-xl border border-white/5 font-mono text-xs shadow-inner'>
								<span className='text-gesh-cyan font-bold'>const</span>{' '}
								<span className='text-gesh-green'>mainVerticals</span> = [
								<span className='text-yellow-300'>"Гемблинг (Gambling)"</span>,{' '}
								<span className='text-yellow-300'>"Криптовалюты (Crypto)"</span>
								, <span className='text-yellow-300'>"Нутра (Nutra)"</span>];
							</div>
							<ul className='space-y-2'>
								<li className='flex gap-2'>
									<Cpu className='w-4 h-4 text-gesh-cyan mt-1 shrink-0' />
									<span>
										Опыт в программировании систем с нуля и разработке
										ИИ-решений.
									</span>
								</li>
								<li className='flex gap-2'>
									<Network className='w-4 h-4 text-gesh-green mt-1 shrink-0' />
									<span>
										Глубокое понимание систем трекинга трафика (Keitaro, Binom,
										Alanbase).
									</span>
								</li>
								<li className='flex gap-2'>
									<Smartphone className='w-4 h-4 text-purple-400 mt-1 shrink-0' />
									<span>
										Умею настраивать любые PWA, Android, iOS приложения для
										залива под гемблу.
									</span>
								</li>
							</ul>
						</div>
					</div>

					<div className='flex flex-col gap-6'>
						<h3 className='font-display text-xl border-l-2 border-gesh-green pl-3'>
							Навыки
						</h3>
						<div className='space-y-6'>
							{skills.map((skillGroup, idx) => (
								<div key={idx} className='space-y-3'>
									<h4 className='text-xs uppercase tracking-widest text-gray-500 font-bold'>
										{skillGroup.category}
									</h4>
									<div className='flex flex-wrap gap-2'>
										{skillGroup.items.map((item, i) => (
											<span
												key={i}
												className='px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono hover:bg-white/10 transition-colors hover:border-gesh-cyan/50 hover:text-gesh-cyan'
											>
												{item}
											</span>
										))}
									</div>
								</div>
							))}
						</div>
					</div>
				</aside>

				{/* Main Content / Experience */}
				<div className='lg:col-span-8 flex flex-col gap-10'>
					<section>
						<div className='flex items-center gap-3 mb-8'>
							<Briefcase className='text-gesh-green w-6 h-6' />
							<h2 className='font-display text-3xl'>Опыт работы</h2>
						</div>

						<div className='relative border-l border-white/10 pb-4 ml-3 space-y-10 pl-8'>
							{experience.map((exp, idx) => (
								<div key={idx} className='relative group'>
									{/* Timeline dot */}
									<span className='absolute -left-[37px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-gesh-black border border-gesh-cyan group-hover:bg-gesh-cyan group-hover:shadow-[0_0_10px_rgba(0,229,255,0.8)] transition-all'></span>

									<div className='bg-white/5 border border-white/10 rounded-xl p-6 hover:border-gesh-green/30 transition-colors group-hover:bg-white/10'>
										<div className='flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4'>
											<div>
												<h3 className='font-display text-xl text-white group-hover:text-gesh-green transition-colors'>
													{exp.company}
												</h3>
												<p className='text-gesh-cyan font-mono text-sm mt-1'>
													{exp.role}
												</p>
											</div>
											<span className='inline-block px-3 py-1 bg-black/50 rounded-lg text-xs font-mono text-gray-400 border border-white/5'>
												{exp.duration}
											</span>
										</div>

										<p className='text-gray-300 text-sm mb-4 leading-relaxed'>
											{exp.description}
										</p>

										<div className='bg-gesh-black/50 rounded-lg p-4 font-mono text-xs leading-relaxed text-gray-400'>
											<div className='mb-2 text-gesh-green/80 select-none'>
												# Задачи и достижения
											</div>
											<ul className='space-y-2 list-none'>
												{exp.highlights.map((h, i) => (
													<li key={i} className='flex gap-2'>
														<span className='text-gesh-cyan select-none'>
															›
														</span>
														<span className='text-gray-300'>{h}</span>
													</li>
												))}
											</ul>
										</div>
									</div>
								</div>
							))}
						</div>
					</section>

					<section className='mb-12'>
						<div className='flex items-center gap-3 mb-8'>
							<GraduationCap className='text-gesh-cyan w-6 h-6' />
							<h2 className='font-display text-3xl'>Образование</h2>
						</div>

						<div className='bg-white/5 border border-white/10 rounded-xl p-6 hover:border-gesh-cyan/30 transition-all group hover:bg-white/10'>
							<h3 className='font-display text-xl text-white'>Бакалавр</h3>
							<p className='text-gray-300 text-sm mt-2 font-mono'>
								Государственный университет интеллектуальных технологий и связи
								(ОНАС им. А.С. Попова), Одесса
							</p>
						</div>
					</section>
				</div>
			</main>
		</div>
	)
}
