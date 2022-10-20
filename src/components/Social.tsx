import { useState } from 'react';
import { GithubFilled, LinkedinFilled } from '@ant-design/icons';

const Social = () => {
	const [social] = useState([
		{
			title: 'Github',
			icon: <GithubFilled />,
		},
		{
			title: 'Instagram',
			icon: <LinkedinFilled />,
		},
	]);

	return (
		<div className='flex flex-col'>
			{social.map(socialItem => (
				<div>{socialItem.icon}</div>
			))}
		</div>
	);
};

export default Social;
