import { routes } from './views';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Routes>
			{routes.map(data => (
				<Route path={data.path} element={data.component()} key={data.path} />
			))}
		</Routes>
	);
}

export default App;
