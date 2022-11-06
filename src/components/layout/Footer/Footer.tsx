import React from 'react';
import logo from '/favicon-leoda.svg';

const Footer = () => {
	return (
		<footer className=' p-6 dark:bg-gray-900 sm:flex-row border-t-2 border-[#EBEBED] bg-dark-gray text-white'>
			<div className='layout-container flex flex-col items-center justify-between'>
				<a
					href='/'
					className='text-xl font-bold text-gray-600 transition-colors duration-300 dark:text-white hover:text-gray-700 dark:hover:text-gray-300'
				>
					<img src={logo} alt='leoda-technologies' />
				</a>

				<p className='text-sm text-gray-600 dark:text-gray-300'>
					© Copyright {new Date().getFullYear()} Leoda. All Rights Reserved.
				</p>

				<div className='flex -mx-2'></div>
			</div>
		</footer>
	);
};

export default Footer;
