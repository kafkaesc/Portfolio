import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from './page';

it('Renders the main heading', () => {
	render(<Home />);
	const mainHeading = screen.getByRole('heading', {
		name: /jared hettinger/i,
		level: 1,
	});
	expect(mainHeading).toBeInTheDocument();
});

it('Renders the Personal Projects section', () => {
	render(<Home />);
	const projectsHeading = screen.getByRole('heading', {
		name: /personal projects/i,
		level: 2,
	});
	expect(projectsHeading).toBeInTheDocument();
});

it('Renders the Professional Projects section', () => {
	render(<Home />);
	const projectsHeading = screen.getByRole('heading', {
		name: /professional projects/i,
		level: 2,
	});
	expect(projectsHeading).toBeInTheDocument();
});

it('Renders the Languages & Technologies section', () => {
	render(<Home />);
	const languagesAndTechnologiesHeading = screen.getByRole('heading', {
		name: /languages & technologies/i,
		level: 2,
	});
	expect(languagesAndTechnologiesHeading).toBeInTheDocument();
});

it('Renders the Mentoring section', () => {
	render(<Home />);
	const mentoringHeading = screen.getByRole('heading', {
		name: /mentoring/i,
		level: 2,
	});
	expect(mentoringHeading).toBeInTheDocument();
});

it('Renders the Find Me Around the Net section', () => {
	render(<Home />);
	const findMeHeading = screen.getByRole('heading', {
		name: /find me around the net/i,
		level: 2,
	});
	expect(findMeHeading).toBeInTheDocument();
});
