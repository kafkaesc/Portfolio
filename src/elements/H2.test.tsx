import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import H2 from './H2';

it('Create a basic h2 element', () => {
	render(<H2>hello world</H2>);
	const heading = screen.getByRole('heading', { level: 2 });
	expect(heading).toBeInTheDocument();
	expect(heading).toHaveTextContent(/hello world/i);
});

it('Create a basic h2 element with an added className', () => {
	render(<H2 className="red">hello world in red</H2>);
	const heading = screen.getByRole('heading', { level: 2 });
	expect(heading).toBeInTheDocument();
	expect(heading).toHaveTextContent(/hello world in red/i);
	expect(heading).toHaveClass('red');
});
