import leo from '../../assets/leonardo.jpg';

const About = () => {
	return (
		<div className='h-[100vh]'>
			<div className='flex h-full'>
				<div className='flex justify-center items-center w-[50%] bg-dark-gray'>
					<img
						src={leo}
						alt='leoda-image'
						className=' object-cover h-full w-full'
					/>
				</div>
				<div className='flex justify-center items-center w-[50%] text-white bg-dark-gray'>
					<div className='p-10'>
						<h4 className='text-2xl text-orange'>about me</h4>
						<p>
							Hello, nice to meet you! My name is Leonardo, i'm a Front-End
							developer from Argentina. I enjoy creating things, solving
							problems and improving the user experience with my habilities.
						</p>
						<br />
						<p>
							I'm a self-taught person, perseverant and creative. Fan of manga,
							anime, boxing, reading.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
