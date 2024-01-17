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
				I am a mentor at{' '}
				<A href="https://www.underdogdevs.org" rel="noreferrer" target="_blank">
					Underdog Devs
				</A>{' '}
				where I teach mentees the foundational skills of logic, data structures,
				and version control. For advanced mentees, I teach best practices for
				web technologies and help practice for technical interviews.
			</div>
		</div>
	);
}
