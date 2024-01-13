import Image from 'next/image';
import A from '@/elements/A';

interface PortfolioCardProps {
	description?: string;
	imgAlt: string;
	imgSrc: string;
	name: string;
	url: string;
}

export default function PortfolioCard({
	description,
	imgSrc,
	name,
	url,
}: PortfolioCardProps) {
	return (
		<div className="p-2 border border-2">
			<div className="h-32 overflow-hidden border border-2">
				{imgSrc && (
					<Image
						alt="Alt text, update this"
						className="object-cover h-32"
						height={512}
						src={imgSrc}
						width={512}
					/>
				)}
			</div>
			<h3 className="text-xl">
				<A href={url} rel="noreferrer" target="_blank">
					{name ? name : 'Project Title'}
				</A>
			</h3>
			{/*<p>
				<code className="text-xs px-1 rounded py-0.5 bg-gray-200">{`<project code>`}</code>
			</p>*/}
			{description && <p>{description}</p>}
		</div>
	);
}
