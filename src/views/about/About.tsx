const About = () => {
	return (
		<div className='h-[100vh]'>
			<div className='flex h-full'>
				<div className='w-[50%] bg-leoda bg-cover bg-center'></div>
				<div className='flex justify-center items-center w-[50%] text-white bg-dark-gray'>
					<div className='p-10'>
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
		</div>
	);
};

export default About;
