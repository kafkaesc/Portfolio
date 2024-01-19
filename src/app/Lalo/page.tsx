import { Metadata } from 'next';

import H2 from '@/elements/H2';
import Hr from '@/elements/Hr';
import Jhumbotron from '@/components/Jhumbotron';
import Mentoring from '@/components/Mentoring';
import Portfolio from '@/components/Portfolio';
import Professional from '@/components/Professional';
import SocialLinks from '@/components/SocialLinks';
import ToolsListPills from '@/components/ToolsListPills';

export const metadata: Metadata = {
	title: 'Jared Hettinger - Software Engineer',
	description:
		"My name is Jared Hettinger and I'm a software engineer in Texas. I'm a versatile developer with experience working on front-end, back-end, and mobile projects.",
	openGraph: {
		description:
			"My name is Jared Hettinger and I'm a software engineer in Texas. I'm a versatile developer with experience working on front-end, back-end, and mobile projects.",
		images: {
			alt: 'A headshot of a tanned-skin man wearing glasses is to the right. To the left of his face is his name, Jared Hettinger, in bold white letters. Underneath his name it says Software Engineer in bright turquoise.',
			height: 630,
			url: 'www.jaredhettinger.io/ogp.png',
			width: 1200,
		},
		title: 'Jared Hettinger - Software Engineer',
		type: 'website',
		url: 'www.jaredhettinger.io',
	},
	twitter: {
		card: 'summary_large_image',
		creator: '@_kafkaesc',
		description:
			"My name is Jared Hettinger and I'm a software engineer in Texas. I'm a versatile developer with experience working on front-end, back-end, and mobile projects.",
		images: {
			alt: 'A headshot of a tanned-skin man wearing glasses is to the right. To the left of his face is his name, Jared Hettinger, in bold white letters. Underneath his name it says Software Engineer in bright turquoise.',
			url: 'www.jaredhettinger.io/twc.png',
		},
		site: '@_kafkaesc',
		title: 'Jared Hettinger - Software Engineer',
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
