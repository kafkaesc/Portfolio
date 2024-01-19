import JhumbotronHeadshot from '@/components/JhumbotronHeadshot';
import Describer from '@/components/Describer';

export default function Jhumbotron() {
	return (
		<div className="bg-jh-black">
			<div className="max-w-4xl  px-2 py-2 mx-auto md:py-0 md:h-[25rem] md:relative">
				<JhumbotronHeadshot />
				<div className="font-black text-center text-jh-white md:text-left md:pl-8 md:pt-16">
					<h1 className="mb-1 text-5xl sm:text-6xl">Lalo Meowinger</h1>
					<h2 className="mb-1 text-3xl text-highlight sm:text-4xl">
						Meow Meow
					</h2>
					<p className="mb-1 text-xl italic font-extrabold sm:text-2xl">
						<Describer />
					</p>
					<div className="w-2/3 mx-auto md:mx-0 md:w-1/2">
						<hr className="my-4 border border-2" />
					</div>
					<div className="w-full mx-1 sm:w-2/3 sm:mx-auto md:mx-0 md:w-1/2">
						<p className="font-normal">
							{`Meow meow, meow meow meow meow. Meow meow meow meow meow meow meowing meow meow-meow, meow-meow, meow meow meow`}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
