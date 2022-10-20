import { useState } from 'react';
import Welcome from './views/Welcome';
import './style/App.css';
import Header from './components/layout/header/Header';
import About from './views/about/About';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='App'>
			<Header />
			<Welcome />
			<About />
		</div>
	);
}

export default App;
