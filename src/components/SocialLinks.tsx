import Image from 'next/image';

const socialLinks = [
	{
		alt: 'LinkedIn Logo',
		ariaLabel: 'View my LinkedIn profile',
		name: 'LinkedIn',
		src: '/images/social/linkedin.png',
		url: 'https://linkedin.com/in/jahettinger',
	},
	{
		alt: 'GitHub Logo',
		ariaLabel: 'View my GitHub profile',
		name: 'GitHub',
		src: '/images/social/github.png',
		url: 'https://github.com/kafkaesc',
	},
	{
		alt: 'Instagram Logo',
		ariaLabel: 'View my Instagram profile',
		name: 'Instagram',
		src: '/images/social/instagram.png',
		url: 'https://instagram.com/kafkaesc',
	},
	{
		alt: 'Twitter Logo',
		ariaLabel: 'View my Twitter profile',
		name: 'Twitter',
		src: '/images/social/twitter.png',
		url: 'https://twitter.com/_kafkaesc',
	},
];

export default function SocialLinks() {
	return (
		<ul>
			{socialLinks.map((sl) => {
				return (
					<li className="inline-block mx-2" key={sl.name}>
						<a
							aria-label={sl.ariaLabel}
							href={sl.url}
							rel="noreferrer"
							target="_blank"
						>
							<Image
								alt={sl.alt}
								className="block w-auto h-8"
								height={32}
								width={32}
								src={sl.src}
							/>
						</a>
					</li>
				);
			})}
		</ul>
	);
}
