import Image from 'next/image';

const socialLinks = [
	{
		alt: 'LinkedIn Logo',
		name: 'LinkedIn',
		src: '/images/social/linkedin.png',
		url: 'https://linkedin.com/in/jahettinger',
	},
	{
		alt: 'GitHub Logo',
		name: 'GitHub',
		src: '/images/social/github.png',
		url: 'https://github.com/kafkaesc',
	},
	{
		alt: 'Instagram Logo',
		name: 'Instagram',
		src: '/images/social/instagram.png',
		url: 'https://instagram.com/kafkaesc',
	},
	{
		alt: 'Twitter Logo',
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
						<a href={sl.url} rel="noreferrer" target="_blank">
							<Image
								alt={sl.alt}
								className="w-6 h-6"
								height={24}
								src={sl.src}
								width={24}
							/>
						</a>
					</li>
				);
			})}
		</ul>
	);
}
