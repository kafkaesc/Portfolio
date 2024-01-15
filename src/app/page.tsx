import A from '@/elements/A';
import H2 from '@/elements/H2';
import Jhumbotron from '@/components/Jhumbotron';
import Mentoring from '@/components/Mentoring';
import Portfolio from '@/components/Portfolio';
import ToolsListPills from '@/components/ToolsListPills';

export default function Home() {
	return (
		<main>
			<Jhumbotron />
			<div className="text-center">
				<A href="https://github.com/kafkaesc" rel="noreferrer" target="_blank">
					GitHub
				</A>
			</div>
			<H2 className="max-w-2xl px-2 mx-auto md:px-0">Personal Projects</H2>
			<div className="max-w-4xl mx-auto mb-4">
				<div className="text-center">
					<Portfolio />
				</div>
			</div>
			{/*<div className="max-w-2xl px-2 mx-auto mb-4 md:px-0">
				<H2>Professional Projects</H2>
				<ul>
					<li>
						Created a manager portal, contractor portal, and consumer facing
						website to automate the planning and execution of hundreds of events
						annually.
					</li>
					<li>
						Created a native Android app featuring news updates, event tracking,
						and a co-worker directory for a major international law firm of over
						2,000 lawyers.
					</li>
					<li>
						Created a manager portal, contractor portal, and consumer facing
						website to automate the planning and execution of hundreds of events
						annually.
					</li>
				</ul>
			</div>*/}
			<div className="max-w-2xl px-2 mx-auto mb-4 md:px-0">
				<H2>Tools</H2>
				<ToolsListPills />
			</div>
			<div className="max-w-2xl px-2 mx-auto mb-4 md:px-0">
				<H2>Mentoring</H2>
				<Mentoring />
			</div>
		</main>
	);
}
