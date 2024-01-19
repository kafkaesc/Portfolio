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
			<code className="text-xs px-1 rounded py-0.5 bg-jh-pill transition duration-[660ms] border border-jh-pill hover:border-jh-pill-highlight hover:text-jh-white hover:bg-jh-pill-highlight">{`</>`}</code>
		</a>
	);
}
