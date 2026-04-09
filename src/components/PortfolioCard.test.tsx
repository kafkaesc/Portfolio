import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import PortfolioCard from './PortfolioCard';

const propsMock = {
	imgAlt: 'Screenshot of my project',
	imgSrc: '/project.png',
	name: 'Cat Summoner',
	repoUrl: 'https://github.com/kafkaesc/cat-summoner',
	url: 'https://cat-summoner.com',
};

it('Renders the project name', () => {
	render(<PortfolioCard {...propsMock} />);
	expect(screen.getByText('Cat Summoner')).toBeInTheDocument();
});

it('Renders a link to the project url', () => {
	render(<PortfolioCard {...propsMock} />);
	const links = screen.getAllByRole('link', { name: /cat summoner/i });
	expect(links[0]).toHaveAttribute('href', 'https://cat-summoner.com');
});

it('Renders a link to the repository', () => {
	render(<PortfolioCard {...propsMock} />);
	const repoLink = screen.getByRole('link', {
		name: /open the cat summoner repository on github/i,
	});
	expect(repoLink).toHaveAttribute(
		'href',
		'https://github.com/kafkaesc/cat-summoner',
	);
});

it('Renders the description when provided', () => {
	render(<PortfolioCard {...propsMock} description="A cool project" />);
	expect(screen.getByText('A cool project')).toBeInTheDocument();
});

it('Does not render a description element when omitted', () => {
	render(<PortfolioCard {...propsMock} />);
	expect(screen.queryByText('A cool project')).not.toBeInTheDocument();
});
