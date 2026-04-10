import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import JhumbotronHeadshot from './JhumbotronHeadshot';

it('Renders the headshot image with the correct source', () => {
	render(<JhumbotronHeadshot />);
	const img = screen.getByAltText('Headshot of Jared Hettinger');
	expect(img).toBeInTheDocument();
	expect(img).toHaveAttribute('src', expect.stringContaining('headshot.png'));
});
