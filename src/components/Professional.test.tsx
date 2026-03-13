import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Professional from './Professional';

it('Successfully includes a link to the resume', () => {
	render(<Professional />);
	const resumeLink = screen.getByRole('link', { name: /download my résumé/i });
	expect(resumeLink).toBeInTheDocument();
});
