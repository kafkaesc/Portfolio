const tools = [
	{ name: 'TypeScript', url: 'https://www.typescriptlang.org' },
	{
		name: 'JavaScript',
		url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
	},
	{ name: 'HTML', url: 'https://html.spec.whatwg.org' },
	{ name: 'CSS', url: 'https://www.w3.org/TR/CSS' },
	{ name: 'React', url: 'https://react.dev' },
	{ name: 'Next', url: 'https://nextjs.org' },
	{ name: 'Remix', url: 'https://remix.run' },
	{ name: 'SQL', url: 'https://www.microsoft.com/en-us/sql-server' },
	{ name: 'Git', url: 'https://git-scm.com' },
	{ name: 'Angular', url: 'https://angular.io' },
	{ name: 'Node', url: 'https://nodejs.org' },
	{ name: 'Express', url: 'https://expressjs.com' },
	{ name: 'Tailwind', url: 'https://tailwindcss.com' },
	{ name: 'JSDoc', url: 'https://jsdoc.app' },
	{ name: 'Jest', url: 'https://jestjs.io' },
];

export default function ToolsListPills() {
	return (
		<ul>
			{tools.map((to) => {
				return (
					<li key={to.name} className="inline-block px-1 py-2">
						<a
							className="px-3 py-1 text-sm bg-gray-200 transition duration-[660ms] border border-gray-200 rounded-full hover:border-black hover:text-jh-white hover:bg-jh-black"
							href={to.url}
							rel="noreferrer"
							target="_blank"
						>
							{to.name}
						</a>
					</li>
				);
			})}
		</ul>
	);
}
