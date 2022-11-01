import Social from '../components/Social';
import { motion } from 'framer-motion';
import basic from '../assets/basic-technologies.svg';

const Welcome = () => {
	return (
		<motion.div
			initial={{ x: -100 }}
			animate={{ x: 0 }}
			className='w-full h-[100vh]'
		>
			<div className='h-full layout-container flex justify-around items-center'>
				<section>
					<p className='text-2xl'>Hi, i'm</p>
					<h2 className='text-6xl text-orange'>Leonardo D'angeli.</h2>
					<div className='max-w-lg'>
						<p className='my-2'>
							AKA Leoda. Software developer from Buenos Aires, Argentina with
							solid experience in building apps with modern technologies.
						</p>
					</div>
					<Social />
				</section>
				<section>
					<img src={basic} alt='html-css-js' />
				</section>
			</div>
		</motion.div>
	);
};

export default Welcome;
