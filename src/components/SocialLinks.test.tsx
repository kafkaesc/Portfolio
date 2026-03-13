import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SocialLinks from './SocialLinks';

it('Successfully loads the social links', () => {
	render(<SocialLinks />);

	// Grab each social profile link by its role and name
	const githubLink = screen.getByRole('link', {
		name: /view my github profile/i,
	});
	const twitterLink = screen.getByRole('link', {
		name: /view my twitter profile/i,
	});
	const instagramLink = screen.getByRole('link', {
		name: /view my instagram profile/i,
	});
	const linkedInLink = screen.getByRole('link', {
		name: /view my linkedin profile/i,
	});

	// Assert that each social profile link exists in the document
	expect(githubLink).toBeInTheDocument();
	expect(twitterLink).toBeInTheDocument();
	expect(instagramLink).toBeInTheDocument();
	expect(linkedInLink).toBeInTheDocument();
});

it('Successfully loads links to open in a new tab', () => {
	render(<SocialLinks />);

	// Get all social profile links by their role
	const links = screen.getAllByRole('link');

	// Assert that each link is set to open in a new tab
	links.forEach((link) => {
		expect(link).toHaveAttribute('target', '_blank');
	});
});

it('Successfully loads the correct URLs', () => {
	render(<SocialLinks />);

	// Grab each social profile link by its role and name
	const githubLink = screen.getByRole('link', {
		name: /view my github profile/i,
	});
	const twitterLink = screen.getByRole('link', {
		name: /view my twitter profile/i,
	});
	const instagramLink = screen.getByRole('link', {
		name: /view my instagram profile/i,
	});
	const linkedInLink = screen.getByRole('link', {
		name: /view my linkedin profile/i,
	});

	// Assert that each social profile link has the expected URL
	expect(githubLink).toBeInTheDocument();
	expect(githubLink).toHaveAttribute('href', 'https://github.com/kafkaesc');
	expect(twitterLink).toBeInTheDocument();
	expect(twitterLink).toHaveAttribute('href', 'https://twitter.com/_kafkaesc');
	expect(instagramLink).toBeInTheDocument();
	expect(instagramLink).toHaveAttribute(
		'href',
		'https://instagram.com/kafkaesc',
	);
	expect(linkedInLink).toBeInTheDocument();
	expect(linkedInLink).toHaveAttribute(
		'href',
		'https://linkedin.com/in/jahettinger',
	);
});
