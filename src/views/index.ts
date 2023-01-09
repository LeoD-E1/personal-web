import Home from './Home';
import NoResult from './NoResult';
import Works from './Works';

export const routes = [
	{ path: '/', component: Home },
	{ path: '/works', component: Works },
	{ path: '*', component: NoResult },
];
