import leo from '../../assets/leonardo.jpg';
import { useRef, useEffect } from 'react';

const About = () => {
	return (
		<div className='h-[100vh]'>
			<div className='flex h-full'>
				<div className='flex justify-center items-center w-[50%]'>
					<img
						src={leo}
						alt='leoda-image'
						className='w-full h-full object-cover'
					/>
				</div>
				<div className='flex justify-center items-center w-[50%]'>
					<div className='p-10'>
						<h4 className='text-2xl text-orange'>about me</h4>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
							nisi veniam aspernatur, perferendis voluptas officia, assumenda
							eos ipsa earum amet aut dolorum facere rem cum quod cupiditate
							illo ullam omnis?
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
