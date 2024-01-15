import JhumbotronHeadshot from '@/components/JhumbotronHeadshot';
import Describer from '@/components/Describer';

export default function Jhumbotron() {
	return (
		<div className="bg-slate-200">
			<div className="max-w-4xl px-2 py-2 mx-auto md:py-0 md:h-[25rem] md:relative">
				<JhumbotronHeadshot />
				<div className="font-bold text-center md:text-left md:pl-8 md:pt-16">
					<h1 className="mb-1 text-5xl sm:text-6xl">Jared Hettinger</h1>
					<h2 className="mb-1 text-3xl sm:text-4xl">Software Engineer</h2>
					<p className="mb-1 text-xl sm:text-2xl">
						<Describer />
					</p>
					<p className="font-normal md:w-1/2">{`Hi there, I'm a software engineer in Texas. I'm a versatile developer with experience working on front-end, back-end, and mobile projects.`}</p>
				</div>
			</div>
		</div>
	);
}
