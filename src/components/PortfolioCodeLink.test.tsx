import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import PortfolioCodeLink from './PortfolioCodeLink';

it('Renders a link to the repository', () => {
	render(
		<PortfolioCodeLink
			name="portfolio"
			url="https://github.com/user/portfolio"
		/>,
	);
	const link = screen.getByRole('link', {
		name: /open the portfolio repository on github/i,
	});
	expect(link).toBeInTheDocument();
});

it('Sets the href to the provided url', () => {
	render(
		<PortfolioCodeLink
			name="portfolio"
			url="https://github.com/user/portfolio"
		/>,
	);
	const link = screen.getByRole('link', {
		name: /open the portfolio repository on github/i,
	});
	expect(link).toHaveAttribute('href', 'https://github.com/user/portfolio');
});

it('Opens in a new tab', () => {
	render(
		<PortfolioCodeLink
			name="portfolio"
			url="https://github.com/user/portfolio"
		/>,
	);
	const link = screen.getByRole('link', {
		name: /open the portfolio repository on github/i,
	});
	expect(link).toHaveAttribute('target', '_blank');
	expect(link).toHaveAttribute('rel', 'noreferrer');
});
