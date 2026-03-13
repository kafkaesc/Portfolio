import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Hr from './Hr';

it('Create a basic hr element', () => {
	const { container } = render(<Hr />);
	const hr = container.querySelector('hr');
	expect(hr).toBeInTheDocument();
});

it('Create a basic hr element with an added className', () => {
	const { container } = render(<Hr className="red" />);
	const hr = container.querySelector('hr');
	expect(hr).toBeInTheDocument();
	expect(hr).toHaveClass('red');
});
