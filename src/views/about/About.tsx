import leoda from '../../assets/leonardo.jpg';

const About = () => {
	return (
		<section id='about' className='h-screen'>
			<div className='flex h-full'>
				<div className='hidden md:block w-[50%] bg-center'>
					<img
						className='object-cover w-full h-full'
						src={leoda}
						alt='Leonardo D angeli'
					/>
				</div>
				<div className='w-full flex flex-col md:flex-row justify-center items-center md:w-[50%] text-white bg-dark-gray'>
					<div className='md:hidden relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] flex'>
						<img
							className='rounded-full object-cover w-full h-full'
							src={leoda}
							alt='leonardo-d-angeli'
						/>
					</div>
					<div className='p-10 max-w-2xl'>
						<h4 className='text-2xl text-orange'>about me</h4>
						<p className='text-gray'>
							Hello, nice to meet you! My name is Leonardo, i'm a Front-End
							developer from Argentina. I enjoy creating things, solving
							problems and improving the user experience with my habilities.
							<br />
							<br />
							I'm a self-taught person, perseverant and creative. Fan of manga,
							anime, boxing, reading.
							<br />
							<br />
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
