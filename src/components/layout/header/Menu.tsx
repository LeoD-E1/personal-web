import { motion } from 'framer-motion';
import { CloseCircleOutlined } from '@ant-design/icons';

const Menu = (props: any) => {
	const { setOpen, navigation } = props;
	const resumeUrl =
		'https://drive.google.com/file/d/15FpVV5xdjEbMlVNqI3FqDxZtJyDPdDqR/view?usp=sharing';
	return (
		<>
			<motion.div
				className='relative z-10 lg:hidden'
				animate={{ opacity: 1 }}
				initial={{ opacity: 0 }}
			>
				<div className='fixed h-full md:max-w-sm w-full bg-dark-gray shadow-xl flex flex-col overflow-y-auto bg-opacity-90 backdrop-blur'>
					<CloseCircleOutlined
						className='text-3xl text-orange absolute right-6 top-3 hover:text-white'
						onClick={() => setOpen(false)}
					/>
					<div className='h-full flex flex-col justify-center py-6 px-4 space-y-6'>
						{navigation.map((page: any) => (
							<div
								key={page.title}
								className='w-full flex justify-center items-center'
							>
								<a
									href={page.link}
									className='p-2 text-2xl text-orange hover:text-white '
								>
									{page.title}
								</a>
							</div>
						))}
						<div className='w-full flex justify-center'>
							<a href={resumeUrl} className='btn-common' target='_blank'>
								resume
							</a>
						</div>
					</div>
				</div>
			</motion.div>
		</>
	);
};

export default Menu;
