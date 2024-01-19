import Image from 'next/image';
import A from '@/elements/A';

export default function Mentoring() {
	return (
		<div className="flex">
			<div className="flex-none">
				<A href="https://www.underdogdevs.org" rel="noreferrer" target="_blank">
					<Image
						alt="An orange block letter combination of UD, the negative space between the U and D forms a silhouette of a dog looking rightward."
						className="w-20 h-20 mr-4 sm:w-32 sm:h-32"
						height={128}
						src="/images/underdogdevs.png"
						width={128}
					/>
				</A>
			</div>
			<div className="flex-auto">
				Meow meow meow meow{' '}
				<A href="https://www.underdogdevs.org" rel="noreferrer" target="_blank">
					Meowmeow Mews
				</A>{' '}
				meow meow meows meow meow meow meows meow meow, meow meow, meow meow
				meow. Meow meow meows, meow meow meows meow meow meows meow meow meow
				meow meow meows.
			</div>
		</div>
	);
}
