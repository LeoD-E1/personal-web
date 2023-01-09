import Header from '../components/layout/header/Header';
import { useEffect, useState } from 'react';
import Footer from '../components/layout/Footer/Footer';
import leoda from '../assets/leoda.gif';

interface Work {
	id: number;
	topics: string[];
	active: boolean;
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
			const response = await fetch('/works.json');
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
			<div className='p-2 flex flex-col items-center justify-center'>
				<div className='max-w-xl grid grid-cols-1 lg:grid-cols-2 gap-4 my-3 lg:max-w-5xl'>
					<div className='w-full flex justify-center items-center my-4 flex-col'>
						<h1 className='font-sora font-bold text-5xl text-dark-gray'>
							Projects
						</h1>
						<span className='text-sm font-sora text-orange max-w-sm my-2 px-2'>
							Some projects are down because their backend was deployed on
							heroku and heroku removed their free plan.
						</span>
					</div>
					{works.map((work: Work) => (
						<div
							key={work.id}
							className={`rounded-xl shadow-xl hover:shadow-2xl bg-cover hover:cursor-default h-full w-full row-span-2`}
							style={{
								backgroundImage: `url(${work.portrait || leoda})`,
							}}
						>
							<div
								className={`flex flex-col justify-around min-h-[300px] h-full w-full bg-opacity-50 ${
									work.active ? 'hover:bg-opacity-10' : ''
								} bg-black rounded-xl p-10`}
							>
								{work.active ? (
									<a
										href={work.active ? work.link : ''}
										target='_blank'
										className={!work.active ? 'cursor-not-allowed' : ''}
									>
										<h1 className='text-2xl text-white py-3 hover:underline'>
											{work.name}
										</h1>
									</a>
								) : (
									<h1 className='text-2xl text-white py-3'>{work.name}</h1>
								)}
								<p className='text-white text-sm my-2'>{work.description}</p>
								<div className='flex w-full justify-start items-center'>
									{work.topics.map((topic, i) => (
										<div
											className='bg-white text-sm py-1 px-2 text-black mx-1 rounded-xl'
											key={i}
										>
											{topic}
										</div>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Works;
