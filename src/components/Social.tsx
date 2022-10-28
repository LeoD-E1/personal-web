import { useState } from 'react';
import { GithubFilled, LinkedinFilled } from '@ant-design/icons';
import { Link } from 'wouter';

const Social = () => {
	const [social] = useState([
		{
			title: 'Github',
			icon: <GithubFilled />,
			to: 'https://github.com/LeoD-E1'
		},
		{
			title: 'Instagram',
			icon: <LinkedinFilled />,
			to: 'https://www.linkedin.com/in/leodadev/'
		},
	]);

	return (
		<div className='flex'>
			{social.map(item => (
				<div className='mx-1'>
					<a href={item.to}>
					{item.icon}
					</a>
				</div>
			))}
		</div>
	);
};

export default Social;
