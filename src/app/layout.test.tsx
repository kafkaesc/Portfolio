import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import RootLayout from './layout';

it('Renders children and sets lang to en', () => {
	render(
		<RootLayout>
			<div>Test Content</div>
		</RootLayout>,
	);
	const testContent = screen.getByText('Test Content');
	expect(testContent).toBeInTheDocument();
	expect(document.documentElement).toHaveAttribute('lang', 'en');
});
