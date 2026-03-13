import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ToolsListPills from './ToolsListPills';

it('Successfully loads the tools pills', () => {
	render(<ToolsListPills />);

	// Grab each technology pill by its role and name
	const tsPill = screen.getByRole('link', { name: /typescript/i });
	const jsPill = screen.getByRole('link', { name: /javascript/i });
	const goPill = screen.getByRole('link', { name: /^go$/i });
	const htmlPill = screen.getByRole('link', { name: /html/i });
	const cssPill = screen.getByRole('link', { name: /css/i });
	const reactPill = screen.getByRole('link', { name: /react/i });
	const nextPill = screen.getByRole('link', { name: /next/i });
	const sqlPill = screen.getByRole('link', { name: /sql/i });
	const gitPill = screen.getByRole('link', { name: /git/i });
	const nodePill = screen.getByRole('link', { name: /node/i });
	const expressPill = screen.getByRole('link', { name: /express/i });
	const tailwindPill = screen.getByRole('link', { name: /tailwind/i });
	const jsdocPill = screen.getByRole('link', { name: /jsdoc/i });
	const jestPill = screen.getByRole('link', { name: /jest/i });
	const testifyPill = screen.getByRole('link', { name: /testify/i });
	const postmanPill = screen.getByRole('link', { name: /postman/i });
	const mockoonPill = screen.getByRole('link', { name: /mockoon/i });

	// Assert that each pill exists in the document
	expect(tsPill).toBeInTheDocument();
	expect(jsPill).toBeInTheDocument();
	expect(goPill).toBeInTheDocument();
	expect(htmlPill).toBeInTheDocument();
	expect(cssPill).toBeInTheDocument();
	expect(reactPill).toBeInTheDocument();
	expect(nextPill).toBeInTheDocument();
	expect(sqlPill).toBeInTheDocument();
	expect(gitPill).toBeInTheDocument();
	expect(nodePill).toBeInTheDocument();
	expect(expressPill).toBeInTheDocument();
	expect(tailwindPill).toBeInTheDocument();
	expect(jsdocPill).toBeInTheDocument();
	expect(jestPill).toBeInTheDocument();
	expect(testifyPill).toBeInTheDocument();
	expect(postmanPill).toBeInTheDocument();
	expect(mockoonPill).toBeInTheDocument();
});

it('Successfully loads links to open in a new tab', () => {
	render(<ToolsListPills />);

	// Get all pills by their role
	const links = screen.getAllByRole('link');

	// Assert that each pill is set to open in a new tab
	links.forEach((link) => {
		expect(link).toHaveAttribute('target', '_blank');
	});
});

it('Successfully loads the correct URLs', () => {
	render(<ToolsListPills />);

	// Grab each technology pill by its role and name
	const tsLink = screen.getByRole('link', { name: /typescript/i });
	const jsLink = screen.getByRole('link', { name: /javascript/i });
	const goLink = screen.getByRole('link', { name: /^go$/i });
	const htmlLink = screen.getByRole('link', { name: /html/i });
	const cssLink = screen.getByRole('link', { name: /css/i });
	const reactLink = screen.getByRole('link', { name: /react/i });
	const nextLink = screen.getByRole('link', { name: /next/i });
	const sqlLink = screen.getByRole('link', { name: /sql/i });
	const gitLink = screen.getByRole('link', { name: /git/i });
	const nodeLink = screen.getByRole('link', { name: /node/i });
	const expressLink = screen.getByRole('link', { name: /express/i });
	const tailwindLink = screen.getByRole('link', { name: /tailwind/i });
	const jsdocLink = screen.getByRole('link', { name: /jsdoc/i });
	const jestLink = screen.getByRole('link', { name: /jest/i });
	const testifyLink = screen.getByRole('link', { name: /testify/i });
	const postmanLink = screen.getByRole('link', { name: /postman/i });
	const mockoonLink = screen.getByRole('link', { name: /mockoon/i });

	// Assert that each pill has the expected URL
	expect(tsLink).toHaveAttribute('href', 'https://www.typescriptlang.org');
	expect(jsLink).toHaveAttribute(
		'href',
		'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
	);
	expect(goLink).toHaveAttribute('href', 'https://go.dev');
	expect(htmlLink).toHaveAttribute('href', 'https://html.spec.whatwg.org');
	expect(cssLink).toHaveAttribute('href', 'https://www.w3.org/TR/CSS');
	expect(reactLink).toHaveAttribute('href', 'https://react.dev');
	expect(nextLink).toHaveAttribute('href', 'https://nextjs.org');
	expect(sqlLink).toHaveAttribute(
		'href',
		'https://www.microsoft.com/en-us/sql-server',
	);
	expect(gitLink).toHaveAttribute('href', 'https://git-scm.com');
	expect(nodeLink).toHaveAttribute('href', 'https://nodejs.org');
	expect(expressLink).toHaveAttribute('href', 'https://expressjs.com');
	expect(tailwindLink).toHaveAttribute('href', 'https://tailwindcss.com');
	expect(jsdocLink).toHaveAttribute('href', 'https://jsdoc.app');
	expect(jestLink).toHaveAttribute('href', 'https://jestjs.io');
	expect(testifyLink).toHaveAttribute(
		'href',
		'https://github.com/stretchr/testify',
	);
	expect(postmanLink).toHaveAttribute('href', 'https://www.postman.com');
	expect(mockoonLink).toHaveAttribute('href', 'https://mockoon.com');
});
