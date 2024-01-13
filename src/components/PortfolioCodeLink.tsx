interface PortfolioCodeLinkProps {
	name: string;
	url: string;
}

export default function PortfolioCodeLink({
	name,
	url,
}: PortfolioCodeLinkProps) {
	return (
		<a
			aria-label={`Open the ${name} repository on GitHub`}
			href={url}
			rel="noreferrer"
			target="_blank"
		>
			<code className="text-xs px-1 rounded py-0.5 bg-gray-200">{`</>`}</code>
		</a>
	);
}
