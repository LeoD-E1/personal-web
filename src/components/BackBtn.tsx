import { useNavigate } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';

const BackBtn = () => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate(-1);
	};

	return (
		<button onClick={handleClick} className='shadow-lg rounded-full'>
			<span className='h-10 w-10'>
				<ArrowLeftOutlined className='hover:bg-gray text-md rounded-full p-3 text-center text-white font-semibold bg-orange' />
			</span>
		</button>
	);
};

export default BackBtn;
