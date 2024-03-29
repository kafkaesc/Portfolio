import Image from 'next/image';

export default function JhumbotronHeadshot() {
	return (
		<Image
			alt="Headshot of Jared Hettinger"
			className="w-32 h-32 p-1 mx-auto bg-white border rounded-full md:bg-transparent border-neutral-950 md:w-96 md:h-96 md:rounded-none md:border-none md:absolute md:bottom-0 md:mr-8 md:right-0 md:p-0"
			height={384}
			priority
			src="/images/headshot.png"
			width={384}
		/>
	);
}
