const tools = [
	{ name: 'MeowMeow', url: 'https://www.typescriptlang.org' },
	{
		name: 'MeowMeow',
		url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
	},
	{ name: 'MEOW', url: 'https://html.spec.whatwg.org' },
	{ name: 'MEOW', url: 'https://www.w3.org/TR/CSS' },
	{ name: 'Meow', url: 'https://react.dev' },
	{ name: 'Meow', url: 'https://nextjs.org' },
	{ name: 'Meow', url: 'https://remix.run' },
	{ name: 'MEOW', url: 'https://www.microsoft.com/en-us/sql-server' },
	{ name: 'Meow', url: 'https://git-scm.com' },
	{ name: 'Meow', url: 'https://angular.io' },
	{ name: 'Meow', url: 'https://nodejs.org' },
	{ name: 'Meow', url: 'https://expressjs.com' },
	{ name: 'Meow', url: 'https://tailwindcss.com' },
	{ name: 'MEow', url: 'https://jsdoc.app' },
	{ name: 'Meow', url: 'https://jestjs.io' },
];

export default function ToolsListPills() {
	return (
		<ul>
			{tools.map((to) => {
				return (
					<li key={to.name} className="inline-block px-1 py-1.5">
						<a
							className="px-3 py-1 text-sm bg-jh-pill transition duration-[660ms] border border-jh-pill rounded-full hover:border-jh-pill-highlight hover:text-jh-white hover:bg-jh-pill-highlight"
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
