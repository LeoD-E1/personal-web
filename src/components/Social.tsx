import { useState } from 'react';
import { GithubFilled, LinkedinFilled } from '@ant-design/icons';

const Social = () => {
	const [social] = useState([
		{
			title: 'Github',
			icon: <GithubFilled />,
			to: 'https://github.com/LeoD-E1',
		},
		{
			title: 'Instagram',
			icon: <LinkedinFilled />,
			to: 'https://www.linkedin.com/in/leodadev/',
		},
	]);

	return (
		<div className='flex'>
			{social.map(item => (
				<div className='mx-1'>
					<a href={item.to}>
						<span className='text-3xl hover:text-orange'>{item.icon}</span>
					</a>
				</div>
			))}
		</div>
	);
};

export default Social;
