import React from 'react';
import { motion } from 'framer-motion';
const Menu = (props: any) => {
	const { setOpen, navigation } = props;
	return (
		<>
			<motion.div
				className='relative z-40 lg:hidden'
				animate={{ x: 0 }}
				initial={false}
			>
				<div className='fixed h-full max-w-sm w-full bg-dark-gray shadow-xl pb-12 flex flex-col overflow-y-auto opacity-90'>
					<div className='h-full flex flex-col justify-start py-6 px-4 space-y-6'>
						{navigation.map((page: any) => (
							<div
								key={page.title}
								className='w-full flex justify-center items-center'
							>
								<a href={page.link} className='p-2 text-3xl text-orange'>
									{page.title}
								</a>
							</div>
						))}
					</div>
				</div>
			</motion.div>
		</>
	);
};

export default Menu;
