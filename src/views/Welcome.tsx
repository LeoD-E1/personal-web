import Social from '../components/Social';
const Welcome = () => {
	const im = ['developer', 'designer'];

	return (
		<div className='w-full h-[100vh] bg-night-blue'>
			<div className='h-full layout-container bg-night-blue flex justify-start items-center'>
				<section className=''>
					<p className='text-2xl text-aqua-green'>Hi, i'm</p>
					<h2 className='text-7xl text-orange'>Leoda.</h2>
				</section>
			</div>
		</div>
	);
};

export default Welcome;
