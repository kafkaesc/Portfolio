import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/elements/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				black: '#000000',
				'jh-black': '#121212',
				'jh-pill': '#e5e7eb',
				'jh-pill-highlight': '#121212',
				'jh-white': '#eeeeee',
				highlight: '#3feee6',
				white: '#ffffff',
			},
			keyframes: {
				'describer-slide-in': {
					from: { opacity: '0.01' },
					'10%': { transform: 'translateX(+32px)', opacity: '0.01' },
					'25%': { opacity: '1.0' },
					'33.33%': { transform: 'translateX(0px)' },
					'90%': { opacity: '1.0' },
					to: { opacity: '0.01' },
				},
				'fade-in': {
					from: { opacity: '1.0' },
					to: { opacity: '1.0' },
				},
				'fade-out': {
					from: { opacity: '1.0' },
					to: { opacity: '0.0' },
				},
				'float-up': {
					from: { transform: 'translateY(0)' },
					to: { transform: 'translateY(-0.5em)' },
				},
				'zoom-from-112': {
					from: { transform: 'scale(1.12)' },
					to: { transform: 'scale(1.0)' },
				},
				'zoom-to-112': {
					from: { transform: 'scale(1.0)' },
					to: { transform: 'scale(1.12)' },
				},
			},
			animation: {
				'describer-slide-in': 'describer-slide-in 5000ms infinite',
				'fade-in': 'fade-in 1s forwards',
				'fade-in-500ms': 'fade-in 500ms forwards',
				'fade-in-750ms': 'fade-in 750ms forwards',
				'fade-out': 'fade-out 1s forwards',
				'fade-out-500ms': 'fade-out 500ms forwards',
				'fade-out-750ms': 'fade-out 750ms forwards',
				'float-up': 'float-up 1s ease-in-out forwards',
				'float-up-500ms': 'float-up 500ms ease-in-out forwards',
				'float-up-750ms': 'float-up 750ms ease-in-out forwards',
				'float-up-2': 'float-up 2s ease-in-out forwards',
				'float-up-3': 'float-up 3s ease-in-out forwards',
				'float-up-4': 'float-up 4s ease-in-out forwards',
				'zoom-from-112': 'zoom-from-112 1s ease-in-out forwards',
				'zoom-to-112': 'zoom-to-112 1s ease-in-out forwards',
			},
		},
	},
	plugins: [],
};
export default config;
