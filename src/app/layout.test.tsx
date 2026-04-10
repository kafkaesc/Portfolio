import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import RootLayout from './layout';

it('Renders children and sets lang to en', () => {
	// React 19 singleton <html> hoisting triggers a false nesting warning in jsdom
	jest.spyOn(console, 'error').mockImplementation(() => {});
	render(
		<RootLayout>
			<div>Test Content</div>
		</RootLayout>,
	);
	jest.restoreAllMocks();
	const testContent = screen.getByText('Test Content');
	expect(testContent).toBeInTheDocument();
	expect(document.documentElement).toHaveAttribute('lang', 'en');
});
