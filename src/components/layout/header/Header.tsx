import { useState } from 'react';
import { motion } from 'framer-motion';
import leodaLogo from '/favicon-leoda.svg';
import { BarsOutlined } from '@ant-design/icons';
import Menu from './Menu';

const navbar = [
	{
		id: 0,
		title: 'home',
		link: '/',
	},
	{
		id: 1,
		title: 'about',
		link: '/about',
	},
	{
		id: 2,
		title: 'works',
		link: '/works',
	},
	{
		id: 3,
		title: 'skills',
		link: '/skills',
	},
	{
		id: 4,
		title: 'contact',
		link: '/contact',
	},
];

const Header = () => {
	const resumeUrl =
		'https://drive.google.com/file/d/15FpVV5xdjEbMlVNqI3FqDxZtJyDPdDqR/view?usp=sharing';
	const [menu, setMenu] = useState<Boolean>(false);
	return (
		<>
			{menu && <Menu setOpen={setMenu} navigation={navbar} />}
			<header className='w-full sticky z-10 bg-opacity-90 py-7 backdrop-blur'>
				<div className='layout-container flex justify-between items-center'>
					<img src={leodaLogo} alt='leoda-Logo' className='object-cover' />
					<section>
						<nav className='hidden lg:flex'>
							<ul className='flex justify-around items-center'>
								{navbar.map(obj => (
									<li
										key={obj.id}
										className='mx-3 text-md text-dark-gray hover:border-b-dark-gray border border-transparent'
									>
										<a href={obj.link} className='decoration-slice'>
											{obj.title}
										</a>
									</li>
								))}
								<a
									href={resumeUrl}
									className='btn-common text-orange border-transparent hover:text-dark-blue'
									target='_blank'
								>
									My resume
								</a>
							</ul>
						</nav>
						<div className='lg:hidden flex m-1'>
							<button onClick={() => setMenu(!menu)}>
								{!menu && <BarsOutlined className='text-orange text-2xl' />}
							</button>
						</div>
					</section>
				</div>
			</header>
		</>
	);
};

export default Header;
