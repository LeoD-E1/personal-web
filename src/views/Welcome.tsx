import Social from '../components/Social';
const Welcome = () => {
	return (
		<div className='w-full h-[100vh]'>
			<div className='h-full layout-container flex justify-start items-center'>
				<section className='max-w-2xl'>
					<p className='text-2xl text-aqua-green'>Hi, i'm</p>
					<h2 className='text-7xl text-orange'>Leonardo D'angeli.</h2>
					<div className='max-w-lg'>
						<p className='my-2'>
							AKA Leoda. Software developer from Buenos Aires, Argentina with
							solid experience in building apps with modern technologies.
						</p>
					</div>
					<Social />
				</section>
			</div>
		</div>
	);
};

export default Welcome;
