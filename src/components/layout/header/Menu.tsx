import React from 'react';
import { CloseOutlined } from '@ant-design/icons';

const Menu = (props: any) => {
	const { setOpen, navigation } = props;
	return (
		<>
			<div className='relative z-40 lg:hidden'>
				<div className='fixed h-full w-full bg-dark-blue shadow-xl pb-12 flex flex-col overflow-y-auto opacity-80'>
					<div className='flex justify-end layout-container'>
						<button
							type='button'
							className=' items-center text-orange text-3xl'
							onClick={() => setOpen(false)}
						>
							<CloseOutlined className='h-9 w-9' aria-hidden='true' />
						</button>
					</div>

					<div className='h-full flex flex-col justify-start py-6 px-4 space-y-6'>
						{navigation.map((page: any) => (
							<div
								key={page.title}
								className='w-full flex justify-center items-center'
							>
								<a href={page.link} className='p-2 text-3xl text-orange'>
									{page.title}
								</a>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Menu;
