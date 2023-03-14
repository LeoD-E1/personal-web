import {
	IconDeviceDesktop,
	IconDeviceMobile,
	IconServer2,
} from '@tabler/icons-react';

const Services = () => {
	const iconMeasure = 40;
	const services = [
		{
			title: 'Front-End',
			icon: <IconDeviceDesktop width={iconMeasure} height={iconMeasure} />,
			description:
				'Build client-side applications with modern features like SPA and maintain semantic coding style among other best practices. Use modern tech such as React JS, TailwindCSS, and Framer motion.',
		},
		{
			title: 'Back-End',
			icon: <IconServer2 width={iconMeasure} height={iconMeasure} />,
			description:
				'Build scalable and maintainable server applications using modern stacks such as Node.js, Express, and MongoDB.',
		},
		{
			title: 'Native',
			icon: <IconDeviceMobile width={iconMeasure} height={iconMeasure} />,
			description:
				'Use React Native for building simple native mobile applications. RN is modern, fast, cross-platform, and popular.',
		},
	];

	return (
		<section className='bg-white flex items-center justify-center h-auto min-h-[70vh] flex-col p-10'>
			<div className='layout-container w-full'>
				<h1 className='text-2xl font-semibold lg:text-3xl my-10 text-dark-gray'>
					What I Can Do
				</h1>
			</div>
			<article className='layout-container flex flex-col items-center'>
				<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-3 max-w-6xl'>
					{services.map((service, i) => (
						<li
							key={`service-${service.title}`}
							className='bg-dark-gray p-6 rounded-lg w-full min-h-[350px] hover:shadow-2xl hover:bg-dark-blue'
						>
							<div className='text-white p-2'>
								{service.icon || service.title + 'icon'}
							</div>

							<div className='mt-4 md:mx-4 md:mt-0'>
								<h1 className='text-2xl font-semibold text-orange'>
									{service.title} Apps
								</h1>

								<p className='mt-3 text-md text-gray'>{service.description}</p>
							</div>
						</li>
					))}
				</ul>
			</article>
		</section>
	);
};

export default Services;
