import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Jhumbotron from './Jhumbotron';

it('Renders the main heading', () => {
	render(<Jhumbotron />);
	const heading = screen.getByRole('heading', {
		name: /jared hettinger/i,
		level: 1,
	});
	expect(heading).toBeInTheDocument();
});

it('Renders the Software Engineer tagline', () => {
	render(<Jhumbotron />);
	const tagline = screen.getByText('Software Engineer');
	expect(tagline).toBeInTheDocument();
});

it('Renders the bio text', () => {
	render(<Jhumbotron />);
	const bioText = screen.getByText(/i'm a software engineer in texas/i);
	expect(bioText).toBeInTheDocument();
});

it('Renders the headshot image', () => {
	render(<Jhumbotron />);
	const img = screen.getByAltText(/headshot of jared hettinger/i);
	expect(img).toBeInTheDocument();
});
