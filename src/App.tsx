import {
	Mail,
	MapPin,
	TerminalSquare,
	Briefcase,
	GraduationCap,
	Network,
	Cpu,
	Smartphone,
	Download,
	Globe,
} from 'lucide-react'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function App() {
	const { t, i18n } = useTranslation()

	const skills = [
		{
			category: t('skills.tech_stack'),
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
			category: t('skills.traffic'),
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
			category: t('skills.cloaking'),
			items: [
				t('skills.items.cloaking'),
				t('skills.items.antidetect'),
				t('skills.items.pwa'),
				t('skills.items.apps'),
			],
		},
		{
			category: t('skills.ai'),
			items: [
				t('skills.items.ai_agents'),
				t('skills.items.ai_solutions'),
				t('skills.items.tg_bots'),
				t('skills.items.automation'),
			],
		},
		{
			category: t('skills.infrastructure'),
			items: [
				t('skills.items.admin'),
				t('skills.items.domains'),
				t('skills.items.monitoring'),
				'Google Looker',
			],
		},
	]

	const experience = [
		{
			company: 'FlexifAI',
			role: t('exp.flexifai.role'),
			duration: t('exp.flexifai.duration'),
			description: t('exp.flexifai.desc'),
			highlights: [
				t('exp.flexifai.h1'),
				t('exp.flexifai.h2'),
				t('exp.flexifai.h3'),
				t('exp.flexifai.h4'),
				t('exp.flexifai.h5'),
			],
		},
		{
			company: 'Melbet',
			role: t('exp.melbet.role'),
			duration: t('exp.melbet.duration'),
			description: t('exp.melbet.desc'),
			highlights: [
				t('exp.melbet.h1'),
				t('exp.melbet.h2'),
				t('exp.melbet.h3'),
				t('exp.melbet.h4'),
				t('exp.melbet.h5'),
			],
		},
		{
			company: 'HUNTERS',
			role: t('exp.hunters.role'),
			duration: t('exp.hunters.duration'),
			description: t('exp.hunters.desc'),
			highlights: [
				t('exp.hunters.h1'),
				t('exp.hunters.h2'),
				t('exp.hunters.h3'),
				t('exp.hunters.h4'),
				t('exp.hunters.h5'),
			],
		},
		{
			company: 'MUGNUS',
			role: t('exp.mugnus.role'),
			duration: t('exp.mugnus.duration'),
			description: t('exp.mugnus.desc'),
			highlights: [
				t('exp.mugnus.h1'),
				t('exp.mugnus.h2'),
				t('exp.mugnus.h3'),
				t('exp.mugnus.h4'),
			],
		},
		{
			company: 'Mart',
			role: t('exp.mart.role'),
			duration: t('exp.mart.duration'),
			description: t('exp.mart.desc'),
			highlights: [t('exp.mart.h1'), t('exp.mart.h2')],
		},
	]

	const toggleLanguage = (lang: string) => {
		i18n.changeLanguage(lang)
	}

	return (
		<div className='min-h-screen bg-gesh-black text-gesh-white font-sans selection:bg-gesh-green selection:text-gesh-black pb-12 print:pb-0'>
			{/* Navbar area */}
			<nav className='sticky top-0 z-50 border-b border-white/10 bg-gesh-black/80 backdrop-blur-md print:hidden'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:h-16 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0'>
					{/* Logo & Mobile Language Toggle */}
					<div className='flex items-center justify-between w-full sm:w-auto'>
						<div className='flex items-center gap-3'>
							<div className='w-8 h-8 flex-shrink-0 rounded-md bg-gesh-green/20 flex items-center justify-center border border-gesh-green/50 shadow-[0_0_15px_rgba(180,216,0,0.3)]'>
								<TerminalSquare className='w-4 h-4 text-gesh-green' />
							</div>
							<span className='font-display font-bold text-lg tracking-wide uppercase text-white shrink-0'>
								Gleb <span className='text-gesh-green'>Melnychenko</span>
							</span>
						</div>

						{/* Mobile language toggle */}
						<div className='sm:hidden flex bg-white/5 border border-white/10 rounded-lg p-1 relative'>
							<div
								className={`absolute top-1 bottom-1 w-[38px] bg-gesh-green rounded-md transition-all duration-300 ease-out ${i18n.language === 'uk' ? 'translate-x-[42px]' : 'translate-x-0'}`}
								style={{ boxShadow: '0 0 10px rgba(180,216,0,0.3)' }}
							/>
							<button
								onClick={() => toggleLanguage('en')}
								className={`relative z-10 px-3 py-1 text-xs font-mono rounded-md transition-colors w-[42px] font-bold ${i18n.language === 'en' ? 'text-gesh-black' : 'text-gray-400 hover:text-white'}`}
							>
								EN
							</button>
							<button
								onClick={() => toggleLanguage('uk')}
								className={`relative z-10 px-3 py-1 text-xs font-mono rounded-md transition-colors w-[42px] font-bold ${i18n.language === 'uk' ? 'text-gesh-black' : 'text-gray-400 hover:text-white'}`}
							>
								UK
							</button>
						</div>
					</div>

					<div className='flex items-center justify-center sm:justify-end gap-4 sm:gap-6 w-full sm:w-auto'>
						{/* Desktop language toggle */}
						<div className='hidden sm:flex bg-white/5 border border-white/10 rounded-lg p-1 relative'>
							<div
								className={`absolute top-1 bottom-1 w-[38px] bg-gesh-green rounded-md transition-all duration-300 ease-out ${i18n.language === 'uk' ? 'translate-x-[42px]' : 'translate-x-0'}`}
								style={{ boxShadow: '0 0 10px rgba(180,216,0,0.3)' }}
							/>
							<button
								onClick={() => toggleLanguage('en')}
								className={`relative z-10 px-3 py-1 text-xs font-mono rounded-md transition-colors w-[42px] font-bold ${i18n.language === 'en' ? 'text-gesh-black' : 'text-gray-400 hover:text-white'}`}
							>
								EN
							</button>
							<button
								onClick={() => toggleLanguage('uk')}
								className={`relative z-10 px-3 py-1 text-xs font-mono rounded-md transition-colors w-[42px] font-bold ${i18n.language === 'uk' ? 'text-gesh-black' : 'text-gray-400 hover:text-white'}`}
							>
								UK
							</button>
						</div>

						<div className='hidden sm:block h-4 w-[1px] bg-white/20'></div>

						<a
							href='mailto:wgagleb@gmail.com'
							className='text-[13px] sm:text-sm font-mono text-gray-400 hover:text-gesh-cyan transition-colors flex items-center gap-1.5 sm:gap-2 shrink-0'
						>
							<Mail className='w-4 h-4' /> wgagleb@gmail.com
						</a>
						<span className='text-[13px] sm:text-sm font-mono text-gray-400 flex items-center gap-1.5 sm:gap-2 shrink-0'>
							<MapPin className='w-4 h-4' /> {t('nav.location')}
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
							{t('nav.available')}
						</p>
						<div className='mt-6 flex flex-col gap-3'>
							<a
								href='https://t.me/iam_guesss'
								target='_blank'
								rel='noreferrer'
								className='flex items-center gap-2 bg-gesh-green text-gesh-black px-4 py-2.5 rounded-xl font-medium text-sm hover:bg-[#c9f000] hover:shadow-[0_0_15px_rgba(180,216,0,0.4)] transition-all uppercase tracking-wider justify-center print:hidden'
							>
								{t('nav.contact')}
							</a>
						</div>
					</div>

					<div className='flex flex-col gap-6'>
						<h3 className='font-display text-xl border-l-2 border-gesh-cyan pl-3'>
							{t('about.title')}
						</h3>
						<div className='text-gray-300 text-sm leading-relaxed space-y-4'>
							<p>{t('about.p1')}</p>
							<div className='bg-gesh-dark p-4 rounded-xl border border-white/5 font-mono text-xs shadow-inner overflow-hidden'>
								<span className='text-gesh-cyan font-bold'>const</span>{' '}
								<span className='text-gesh-green'>mainVerticals</span> = [
								<span className='text-yellow-300'>"Gambling"</span>,{' '}
								<span className='text-yellow-300'>"Crypto"</span>,{' '}
								<span className='text-yellow-300'>"Nutra"</span>];
							</div>
							<ul className='space-y-2'>
								<li className='flex gap-2'>
									<Cpu className='w-4 h-4 text-gesh-cyan mt-1 shrink-0' />
									<span>{t('about.bullet1')}</span>
								</li>
								<li className='flex gap-2'>
									<Network className='w-4 h-4 text-gesh-green mt-1 shrink-0' />
									<span>{t('about.bullet2')}</span>
								</li>
								<li className='flex gap-2'>
									<Smartphone className='w-4 h-4 text-purple-400 mt-1 shrink-0' />
									<span>{t('about.bullet3')}</span>
								</li>
							</ul>
						</div>
					</div>

					<div className='flex flex-col gap-6'>
						<h3 className='font-display text-xl border-l-2 border-gesh-green pl-3'>
							{t('skills.title')}
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
							<h2 className='font-display text-3xl'>{t('experience.title')}</h2>
						</div>

						<div className='relative border-l border-white/10 pb-4 ml-3 space-y-10 pl-8'>
							{experience.map((exp, idx) => (
								<div key={idx} className='relative group'>
									{/* Timeline dot */}
									<span className='absolute -left-[37px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-gesh-black border border-gesh-cyan group-hover:bg-gesh-cyan group-hover:shadow-[0_0_10px_rgba(0,229,255,0.8)] transition-all print:-left-[38px]'></span>

									<div className='bg-white/5 border border-white/10 rounded-xl p-6 hover:border-gesh-green/30 transition-colors group-hover:bg-white/10 print:bg-transparent print:border-none print:p-0'>
										<div className='flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4'>
											<div>
												<h3 className='font-display text-xl text-white group-hover:text-gesh-green transition-colors'>
													{exp.company}
												</h3>
												<p className='text-gesh-cyan font-mono text-sm mt-1'>
													{exp.role}
												</p>
											</div>
											<span className='inline-block px-3 py-1 bg-black/50 rounded-lg text-xs font-mono text-gray-400 border border-white/5 print:border-none print:px-0'>
												{exp.duration}
											</span>
										</div>

										<p className='text-gray-300 text-sm mb-4 leading-relaxed print:text-black/80'>
											{exp.description}
										</p>

										<div className='bg-gesh-black/50 rounded-lg p-4 font-mono text-xs leading-relaxed text-gray-400 print:bg-transparent print:px-0'>
											<div className='mb-2 text-gesh-green/80 select-none print:text-gesh-green'>
												{t('exp.tasks_achievements')}
											</div>
											<ul className='space-y-2 list-none'>
												{exp.highlights.map((h, i) => (
													<li key={i} className='flex gap-2'>
														<span className='text-gesh-cyan select-none'>
															›
														</span>
														<span className='text-gray-300 print:text-black/70'>
															{h}
														</span>
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
							<h2 className='font-display text-3xl'>{t('education.title')}</h2>
						</div>

						<div className='bg-white/5 border border-white/10 rounded-xl p-6 hover:border-gesh-cyan/30 transition-all group hover:bg-white/10 print:bg-transparent print:border-none print:p-0 print:pl-8 print:border-l print:border-white/10'>
							<h3 className='font-display text-xl text-white'>
								{t('education.degree')}
							</h3>
							<p className='text-gray-300 text-sm mt-2 font-mono print:text-black/80'>
								{t('education.uni')}
							</p>
						</div>
					</section>
				</div>
			</main>
		</div>
	)
}
