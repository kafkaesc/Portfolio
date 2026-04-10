import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import OneTwoThreeColumn from './OneTwoThreeColumn';

it('Renders children', () => {
	render(<OneTwoThreeColumn>Test content</OneTwoThreeColumn>);
	expect(screen.getByText('Test content')).toBeInTheDocument();
});

it('Applies default column classes', () => {
	render(<OneTwoThreeColumn>Test content</OneTwoThreeColumn>);
	const el = screen.getByText('Test content');
	expect(el).toHaveClass('inline-block', 'w-full', 'sm:w-1/2', 'md:w-1/3');
});

it('Applies additional className', () => {
	render(
		<OneTwoThreeColumn className="extra-class">Test content</OneTwoThreeColumn>,
	);
	const el = screen.getByText('Test content');
	expect(el).toHaveClass('extra-class');
});
