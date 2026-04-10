import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Describer from './Describer';

const jhDescriptions = [
	'Dungeon Diver',
	'Freckled Latino',
	'Pro-Tailwind Cyclist',
	'Sci-fi Enthusiast',
	'Tea Drinker',
];

it('Renders a known description inside a span', () => {
	render(<Describer />);
	const span = screen.getByText((text) => jhDescriptions.includes(text));
	expect(span).toBeInTheDocument();
	expect(span.tagName).toBe('SPAN');
});

it('Renders a description when prefers-reduced-motion is enabled', () => {
	window.matchMedia = jest.fn().mockImplementation((query: string) => ({
		matches: true,
		media: query,
		onchange: null,
		addEventListener: jest.fn(),
		removeEventListener: jest.fn(),
		dispatchEvent: jest.fn(),
	}));
	render(<Describer />);
	const span = screen.getByText((text) => jhDescriptions.includes(text));
	expect(span).toBeInTheDocument();
});
