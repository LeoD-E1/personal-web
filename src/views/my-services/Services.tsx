import { useState } from 'react';
import { RightCircleFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Services = () => {
	const [services] = useState([
		{
			title: 'Front-End',
			icon: <RightCircleFilled />,
			description:
				'Build client-side applications with modern features like SPA and maintain semantic coding style among other best practices. Use modern tech such as React JS, NextJS, TailwindCSS, and Framer motion.',
		},
		{
			title: 'Back-End',
			icon: <RightCircleFilled />,
			description:
				'Build scalable and maintainable server applications using modern stacks such as Node.js, Express, and MongoDB.',
		},
		{
			title: 'Native',
			icon: <RightCircleFilled />,
			description:
				'Use React Native for building simple native mobile applications. RN is modern, fast, cross-platform, and popular.',
		},
	]);

	return (
		<section className='bg-white dark:bg-gray-900 flex items-center justify-center h-screen flex-col'>
			<div className='lg:flex lg:items-center'>
				<div className='max-w-xl space-y-12 lg:w-1/2 flex flex-col '>
					<div className='flex flex-col items-center '>
						<h1 className='text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white'>
							What I Can Do
						</h1>
						<h5 className='text-lg'>Service offers</h5>
					</div>

					{services.map((service, i) => (
						<div key={i} className='flex items-start text-sm'>
							<span className='inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4'>
								{service.icon}
							</span>

							<div className='mt-4 md:mx-4 md:mt-0'>
								<h1 className='text-2xl font-semibold text-gray-700 capitalize dark:text-white'>
									{service.title} Apps
								</h1>

								<p className='mt-3 text-gray-500 dark:text-gray-300'>
									{service.description}
								</p>
							</div>
						</div>
					))}
					<div className='flex justify-center'>
						<Link
							to='/works'
							className='btn-common text-dark-gray border-dark-gray'
						>
							view more
						</Link>
					</div>
				</div>

				<div className='hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center'>
					<img
						className='w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full'
						src='https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80'
						alt=''
					/>
				</div>
			</div>
		</section>
	);
};

export default Services;
