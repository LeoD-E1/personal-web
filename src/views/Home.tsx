import Footer from '../components/layout/Footer/Footer';
import Header from '../components/layout/header/Header';
import About from './about/About';
// import Contact from './contact/Contact';
import Services from './my-services/Services';
import Welcome from './Welcome';

const Home = () => {
	return (
		<>
			<Header />
			<Welcome />
			<About />
			<Services />
			{/* <Contact /> */}
			<Footer />
		</>
	);
};

export default Home;
