import { useState } from 'react';
import { motion } from 'framer-motion';
import leodaLogo from '/favicon-leoda.svg';
import { BarsOutlined } from '@ant-design/icons';
import Menu from './Menu';

const navbar = [
	{
		id: 0,
		title: 'about',
		link: '',
	},
	{
		id: 1,
		title: 'works',
		link: '/works',
	},
	{
		id: 2,
		title: 'skills',
		link: '',
	},
	{
		id: 3,
		title: 'contact',
		link: '',
	},
];

const Header = () => {
	const resumeUrl =
		'https://drive.google.com/file/d/15FpVV5xdjEbMlVNqI3FqDxZtJyDPdDqR/view?usp=sharing';
	const [menu, setMenu] = useState<Boolean>(false);
	return (
		<>
			{menu && <Menu setOpen={setMenu} navigation={navbar} />}
			<header className='w-full relative bg-dark-gray bg-opacity-90 p-1 backdrop-blur'>
				<div className='layout-container flex justify-between items-center'>
					<img src={leodaLogo} alt='leoda-Logo' className='object-cover' />
					<section>
						<nav className='hidden lg:flex'>
							<ul className='flex justify-around items-center'>
								{navbar.map(obj => (
									<li key={obj.id} className='mx-3 text-md text-white'>
										<a href={obj.link} className='decoration-slice'>
											{obj.title.toUpperCase()}
										</a>
									</li>
								))}
								<a href={resumeUrl} className='btn-common' target='_blank'>
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
