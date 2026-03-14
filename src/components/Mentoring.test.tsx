import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Mentoring from './Mentoring';

it('Successfully includes a link to Underdog Devs', () => {
	render(<Mentoring />);
	const udLink = screen.getByRole('link', { name: /underdog devs/i });
	expect(udLink).toBeInTheDocument();
});
