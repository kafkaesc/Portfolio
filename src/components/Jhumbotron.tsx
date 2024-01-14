import JhumbotronHeadshot from '@/components/JhumbotronHeadshot';
import Describer from '@/components/Describer';

export default function Jhumbotron() {
	return (
		<div className="bg-slate-200">
			<div className="max-w-4xl px-2 pt-2 mx-auto md:pt-0 md:h-[25rem] md:relative">
				<JhumbotronHeadshot />
				<div className="font-bold text-center md:text-left md:pl-8 md:pt-16">
					<h1 className="text-5xl sm:text-6xl">Jared Hettinger</h1>
					<h2 className="text-3xl sm:text-4xl">Software Engineer</h2>
					<p className="text-xl sm:text-2xl">
						<Describer />
					</p>
				</div>
			</div>
		</div>
	);
}
