import Header from '../components/layout/header/Header';
import { useEffect, useState } from 'react';
import Footer from '../components/layout/Footer/Footer';
import leoda from '../assets/leoda.gif';

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
					<div className='w-full flex justify-center items-center my-4'>
						<h1 className='font-sora font-bold text-5xl text-dark-gray'>
							Projects
						</h1>
					</div>
					{works.map(work => (
						<div
							className={`rounded-xl shadow-xl bg-cover hover:cursor-default h-full w-full row-span-2`}
							style={{
								backgroundImage: `url(${work.portrait || leoda})`,
							}}
						>
							<a href={work.link} target='_blank'>
								<div className='h-full w-full hover:bg-opacity-50 hover:bg-black rounded-xl p-10'>
									<h1 className='text-2xl text-white py-3'>{work.name}</h1>
									<p className='text-white text-sm'>
										Lorem, ipsum dolor sit amet consectetur adipisicing elit.
										Veniam asperiores tempora deleniti sit, saepe possimus,
										voluptas quam magni facere mollitia inventore ipsam
										voluptate nostrum doloribus necessitatibus. A magni est
										accusamus.
									</p>
								</div>
							</a>
						</div>
					))}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Works;
