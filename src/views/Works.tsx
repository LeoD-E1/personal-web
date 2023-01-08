import Header from '../components/layout/header/Header';
import { useEffect, useState } from 'react';

interface Work {
	id: number;
	name: string;
	link: string;
	portrait: string;
	images: string[];
	description: string;
	date: string;
}

const Works = () => {
	const [works, setWorks] = useState<Work[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const getWorks = async () => {
		try {
			const response = await fetch('/public/works.json');
			const data: Work[] = await response.json();
			setWorks(data);
		} catch (error) {
			setError(true);
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		(async () => {
			await getWorks();
		})();
	}, []);

	if (loading) return <h1 className='text-3xl text-dark-gray'> Loading...</h1>;
	if (error)
		return <h1 className='text-3xl text-dark-gray'> Error: {error}</h1>;

	return (
		<>
			<Header />
			<div className='p-2 flex items-center justify-center'>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 my-3 max-w-6xl'>
					{works.map(work => (
						<div
							className='border border-gray-light p-5 rounded-lg'
							key={work.id}
						>
							<a href={work.link} target='_blank'>
								<h2 className='hover:text-dark-blue'>{work.name}</h2>
							</a>
							<p>{work.description}</p>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Works;
