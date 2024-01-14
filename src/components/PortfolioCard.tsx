import Image from 'next/image';
import A from '@/elements/A';
import PortfolioCodeLink from '@/components/PortfolioCodeLink';

interface PortfolioCardProps {
	description?: string;
	imgAlt: string;
	imgSrc: string;
	name: string;
	repoUrl: string;
	url: string;
}

export default function PortfolioCard({
	description,
	imgSrc,
	name,
	repoUrl,
	url,
}: PortfolioCardProps) {
	return (
		<div className="p-2 border border-2 text-left">
			<A href={url} rel="noreferrer" target="_blank">
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
			</A>
			<div className="flex">
				<div className="flex-auto">
					<h3 className="text-xl font-bold">
						<A href={url} rel="noreferrer" target="_blank">
							{name}
						</A>
					</h3>
				</div>
				<div className="flex-none">
					<PortfolioCodeLink name={name} url={repoUrl} />
				</div>
			</div>
			{description && <p>{description}</p>}
		</div>
	);
}
