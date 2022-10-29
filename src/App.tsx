import Welcome from './views/Welcome';
import './style/App.css';
import Header from './components/layout/header/Header';
import About from './views/about/About';
import Services from './views/my-services/Services';
import Footer from './components/layout/Footer/Footer';

function App() {
	return (
		<div className='App'>
			<Header />
			<Welcome />
			<About />
			<Services />
			<Footer />
		</div>
	);
}

export default App;
