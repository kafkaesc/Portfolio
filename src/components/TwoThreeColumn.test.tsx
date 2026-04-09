import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TwoThreeColumn from './TwoThreeColumn';

it('Renders children', () => {
	render(<TwoThreeColumn>Test content</TwoThreeColumn>);
	expect(screen.getByText('Test content')).toBeInTheDocument();
});

it('Applies default column classes', () => {
	render(<TwoThreeColumn>Test content</TwoThreeColumn>);
	const el = screen.getByText('Test content');
	expect(el).toHaveClass('inline-block', 'w-1/2', 'md:w-1/3');
});

it('Applies additional className', () => {
	render(<TwoThreeColumn className="extra-class">Test content</TwoThreeColumn>);
	const el = screen.getByText('Test content');
	expect(el).toHaveClass('extra-class');
});
