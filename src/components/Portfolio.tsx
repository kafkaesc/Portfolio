import PortfolioCard from '@/components/PortfolioCard';
import TwoToThreeColumn from '@/components/TwoToThreeColumn';

// TODO: Add Alt text
const portfolioProjects = [
	{
		description:
			'A bilingual website for practicing English-Spanish vocabulary',
		imgAlt: '',
		imgSrc: '/images/portfolio/lenguau.png',
		name: '¡Lenguau!',
		repoUrl: 'https://github.com/kafkaesc/Lenguau',
		url: 'https://www.lenguau.com',
	},
	{
		description: 'A website where you can call cats and make friends',
		imgAlt: '',
		imgSrc: '/images/portfolio/catsummoner.png',
		name: 'Cat Summoner',
		repoUrl: 'https://github.com/kafkaesc/Cat-Summoner',
		url: 'https://www.cat-summoner.com',
	},
	{
		description:
			'Text your friend Ishmael, and learn a WCAG feature in the meantime',
		imgAlt: '',
		imgSrc: '/images/portfolio/catsummoner.png',
		name: 'Call-Me-Ishmael',
		repoUrl: 'https://github.com/kafkaesc/Call-Me-Ishmael',
		url: 'https://www.call-me-ishmael.xyz/',
	},
];

export default function Portfolio() {
	return (
		<div className="max-w-4xl mx-auto">
			{portfolioProjects &&
				portfolioProjects.map((pp) => {
					return (
						<TwoToThreeColumn key={pp.name} className="p-1 align-top">
							<PortfolioCard
								description={pp.description}
								imgAlt={pp.imgAlt}
								imgSrc={pp.imgSrc}
								name={pp.name}
								url={pp.url}
							/>
						</TwoToThreeColumn>
					);
				})}
		</div>
	);
}
