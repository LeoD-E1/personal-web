import { motion } from 'framer-motion';
import { CloseCircleOutlined } from '@ant-design/icons';

const Menu = (props: any) => {
	const { setOpen, navigation } = props;
	return (
		<>
			<motion.div
				className='relative z-40 lg:hidden'
				animate={{ x: 0 }}
				initial={false}
			>
				<div className='fixed h-full md:max-w-sm w-full bg-dark-gray shadow-xl flex flex-col overflow-y-auto bg-opacity-95'>
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
					</div>
				</div>
			</motion.div>
		</>
	);
};

export default Menu;
