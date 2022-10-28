import { useState, useEffect } from 'react';
import { BarsOutlined, CloseOutlined } from '@ant-design/icons';
import Menu from './Menu';

const navbar = [
	{
		id: 0,
		title: 'about',
		link: '',
	},
	{
		id: 1,
		title: 'works',
		link: '',
	},
	{
		id: 2,
		title: 'skills',
		link: '',
	},
	{
		id: 3,
		title: 'contact',
		link: '',
	},
];

const Header = () => {
	const [menu, setMenu] = useState<Boolean>(false);
	return (
		<>
			{menu && <Menu setOpen={setMenu} navigation={navbar} />}
			<header className='my-5 z-10 fixed flex justify-center w-full'>
				<div className=' max-w-2xl flex justify-center items-center bg-dark-gray rounded-full p-4'>
					{/* <img src='' alt='leoda-Logo' className='object-cover' /> */}
					<section>
						<nav className='hidden lg:flex'>
							<ul className='flex justify-around items-center'>
								{navbar.map(obj => (
									<li key={obj.id} className='mx-3 text-md text-white'>
										<a href={obj.link} className='decoration-slice'>
											{obj.title.toUpperCase()}
										</a>
									</li>
								))}
								<button className='btn-common'>resume</button>
							</ul>
						</nav>
						<div className='lg:hidden flex m-1'>
							<button onClick={() => setMenu(!menu)}>
								{menu ? (
									<CloseOutlined className='text-orange text-2xl' />
								) : (
									<BarsOutlined className='text-orange text-2xl' />
								)}
							</button>
						</div>
					</section>
				</div>
			</header>
		</>
	);
};

export default Header;
