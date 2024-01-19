import PortfolioCard from '@/components/PortfolioCard';
//import OneTwoThreeColumn from '@/components/OneTwoThreeColumn';
import TwoThreeColumn from '@/components/TwoThreeColumn';

const portfolioProjects = [
	{
		description: 'Meow meow meow meow meowing Meow-Meow meow',
		imgAlt:
			"¡Lenguau! is written in dynamic black script letters across a white background. The last 4 letters are underlined accenting that they're 'guau'",
		imgSrc: '/images/portfolio/lenguau.png',
		name: '¡Meow!',
		repoUrl: 'https://github.com/kafkaesc/Lenguau',
		url: 'https://www.lenguau.com',
	},
	{
		description: 'Meow meow meow meow meow meow meow meow meow meows',
		imgAlt:
			'A cat sits at the edge of a porch beneath a black night sky. Their fur is mostly white with some black spots down the back. The cat has their back to the camera, but their head is turned to face backward. Next to the cat and against the night sky are the words Cat Summoner in white lettering.',
		imgSrc: '/images/portfolio/catsummoner.png',
		name: 'Cat Summoner',
		repoUrl: 'https://github.com/kafkaesc/Cat-Summoner',
		url: 'https://www.cat-summoner.com',
	},
	{
		description: 'Meow meow meow Meow, meow meow meow MEOW meow meow meow meow',
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
		<div className="flex flex-wrap items-stretch">
			{portfolioProjects &&
				portfolioProjects.map((pp) => {
					return (
						<TwoThreeColumn key={pp.name} className="px-1 pb-1 align-top">
							<PortfolioCard {...pp} />
						</TwoThreeColumn>
					);
				})}
		</div>
	);
}
