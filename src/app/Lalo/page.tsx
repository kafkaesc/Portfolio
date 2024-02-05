import { Metadata } from 'next';

import H2 from '@/elements/H2';
import Hr from '@/elements/Hr';
import Jhumbotron from './components/Jhumbotron';
import Mentoring from './components/Mentoring';
import Portfolio from './components/Portfolio';
import Professional from './components/Professional';
import SocialLinks from '@/components/SocialLinks';
import ToolsListPills from './components/ToolsListPills';

export const metadata: Metadata = {
	title: 'Lalo Meowinger - Meow Meow',
	description:
		'Meow meow meow Lalo Meowinger meow meow meow meow meow meow meow. Meow meow meow meow meow meow meowing meow meow-meow, meow-meow, meow meow meows.',
	openGraph: {
		description:
			'Meow meow meow Lalo Meowinger meow meow meow meow meow meow meow. Meow meow meow meow meow meow meowing meow meow-meow, meow-meow, meow meow meows.',
		images: {
			alt: 'A headshot of a black and white cat is to the right. To the left of his face is his name, Lalo Meowinger, in bold white letters. Underneath his name it says Meow Meow in bright turquoise.',
			height: 630,
			url: 'https://www.jaredhettinger.io/lalo-ogp.png',
			width: 1200,
		},
		title: 'Lalo Meowinger - Meow Meow',
		type: 'website',
		url: 'https://www.jaredhettinger.io/Lalo',
	},
	twitter: {
		card: 'summary_large_image',
		creator: '@_kafkaesc',
		description:
			'Meow meow meow Lalo Meowinger meow meow meow meow meow meow meow. Meow meow meow meow meow meow meowing meow meow-meow, meow-meow, meow meow meows.',
		images: {
			alt: 'A headshot of a black and white cat is to the right. To the left of his face is his name, Lalo Meowinger, in bold white letters. Underneath his name it says Meow Meow in bright turquoise.',
			url: 'https://www.jaredhettinger.io/lalo-twc.png',
		},
		site: '@_kafkaesc',
		title: 'Lalo Meowinger - Meow Meow',
	},
};

export default function Lalo() {
	return (
		<main>
			<div className="mb-2">
				<Jhumbotron />
			</div>
			<div className="max-w-2xl px-2 mx-auto mb-2 md:px-0">
				<H2>Meow Meow</H2>
				<Hr />
			</div>
			<div className="max-w-4xl mx-auto mb-4">
				<div className="text-center">
					<Portfolio />
				</div>
			</div>
			<div className="max-w-2xl px-2 mx-auto mb-4 md:px-0">
				<H2>Meow Meow</H2>
				<Hr className="mb-2" />
				<Professional />
			</div>
			<div className="max-w-2xl px-2 mx-auto mb-4 md:px-0">
				<H2>Meow & Meow</H2>
				<Hr className="mb-2" />
				<ToolsListPills />
			</div>
			<div className="max-w-2xl px-2 mx-auto mb-4 md:px-0">
				<H2>Meowing</H2>
				<Hr className="mb-2" />
				<Mentoring />
			</div>
			<div className="max-w-2xl px-2 mx-auto mb-4 md:px-0">
				<H2>Meow Mew Meow mew Meow</H2>
				<Hr className="mb-2" />
				<div className="text-right">
					<SocialLinks />
				</div>
			</div>
		</main>
	);
}
