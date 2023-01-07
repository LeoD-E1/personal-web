import React from 'react';
import Footer from '../components/layout/Footer/Footer';
import Header from '../components/layout/header/Header';
import About from './about/About';
import Services from './my-services/Services';
import Welcome from './Welcome';

const Home: React.FC = () => {
	return (
		<>
			<Header />
			<Welcome />
			<About />
			<Services />
			<Footer />
		</>
	);
};

export default Home;
