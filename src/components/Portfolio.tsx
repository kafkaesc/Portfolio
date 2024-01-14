import PortfolioCard from '@/components/PortfolioCard';
import TwoToThreeColumn from '@/components/TwoToThreeColumn';

const portfolioProjects = [
	{
		description:
			'A bilingual website for practicing English-Spanish vocabulary',
		imgAlt:
			"¡Lenguau! is written in dynamic black script letters across a white background. The last 4 letters are underlined accenting that they're 'guau'",
		imgSrc: '/images/portfolio/lenguau.png',
		name: '¡Lenguau!',
		repoUrl: 'https://github.com/kafkaesc/Lenguau',
		url: 'https://www.lenguau.com',
	},
	{
		description: 'A website where you can call cats and make friends',
		imgAlt:
			'A cat sits at the edge of a porch beneath a black night sky. Their fur is mostly white with some black spots down the back. The cat has their back to the camera, but their head is turned to face backward. Next to the cat and against the night sky are the words Cat Summoner in white lettering.',
		imgSrc: '/images/portfolio/catsummoner.png',
		name: 'Cat Summoner',
		repoUrl: 'https://github.com/kafkaesc/Cat-Summoner',
		url: 'https://www.cat-summoner.com',
	},
	{
		description:
			'Text your friend Ishmael, and learn a WCAG feature in the meantime',
		imgAlt:
			'A black shield with the white silhouette of a telephone receiver sits in the middle of a denim background',
		imgSrc: '/images/portfolio/callmeishmael.png',
		name: 'Call-Me-Ishmael',
		repoUrl: 'https://github.com/kafkaesc/Call-Me-Ishmael',
		url: 'https://www.call-me-ishmael.xyz/',
	},
];

export default function Portfolio() {
	return (
		<div className="max-w-4xl mx-auto text-center">
			{portfolioProjects &&
				portfolioProjects.map((pp) => {
					return (
						<TwoToThreeColumn key={pp.name} className="p-1 align-top">
							<PortfolioCard {...pp} />
						</TwoToThreeColumn>
					);
				})}
		</div>
	);
}
