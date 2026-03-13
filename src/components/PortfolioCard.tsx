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
	imgAlt,
	imgSrc,
	name,
	repoUrl,
	url,
}: PortfolioCardProps) {
	return (
		<div className="h-full p-2 text-left border-2">
			<A href={url} rel="noreferrer" target="_blank">
				<div className="h-32 overflow-hidden border-2">
					{imgSrc && (
						<Image
							alt={imgAlt}
							className="object-cover h-32 transition duration-[400ms] hover:scale-110"
							height={512}
							sizes="(max-width: 768px) 50vw, 33vw"
							src={imgSrc}
							width={512}
						/>
					)}
				</div>
			</A>
			<div className="flex">
				<div className="flex-auto">
					<h3 className="text-xl font-bold">
						{url ? (
							<A href={url} rel="noreferrer" target="_blank">
								{name}
							</A>
						) : (
							<>{name}</>
						)}
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
