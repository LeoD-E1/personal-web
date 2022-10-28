/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		colors: {
			transparent: 'transparent',
			'night-blue': '#07283C',
			'dark-blue': '#051931',
			'aqua-green': '#2C706F',
			blue: '#1fb6ff',
			purple: '#7e5bef',
			pink: '#ff49db',
			orange: '#FF4703',
			green: '#13ce66',
			yellow: '#ffc82c',
			'dark-gray': '#1F2731',
			gray: '#8492a6',
			'gray-light': '#d3dce6',
			'middle-gray': '#596570',
			white: '#fff',
			black: '#000',
		},
		fontFamily: {
			sans: ['Graphik', 'sans-serif'],
			sora: ['Sora', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
		},
		extend: {
			keyframes: {
				blink: {
					'0%': { opacity: 1 },
					'40%': { opacity: 1 },
					'60%': { opacity: 0 },
					'100%': { opacity: 0 },
				},
			},
			animation: {
				blink: 'blink 6s linear infinite alternate',
			},
			spacing: {
				128: '32rem',
				144: '36rem',
			},
			borderRadius: {
				'4xl': '2rem',
			},
		},
	},
	plugins: [],
};
