import H2 from '@/elements/H2';
import Hr from '@/elements/Hr';
import Jhumbotron from '@/components/Jhumbotron';
import Mentoring from '@/components/Mentoring';
import Portfolio from '@/components/Portfolio';
import SocialLinks from '@/components/SocialLinks';
import ToolsListPills from '@/components/ToolsListPills';

export default function Home() {
	return (
		<main>
			<div className="mb-2">
				<Jhumbotron />
			</div>
			<div className="max-w-2xl px-2 mx-auto mb-2 md:px-0">
				<H2>Personal Projects</H2>
				<Hr />
			</div>
			<div className="max-w-4xl mx-auto mb-4">
				<div className="text-center">
					<Portfolio />
				</div>
			</div>
			{/*<div className="max-w-2xl px-2 mx-auto mb-4 md:px-0">
				<H2>Professional Projects</H2>
				<Hr className="mb-2" />
				<ul className="list-disc text-jh-black">
					<li>
						Created customizable user reactions for enterprise-level live video
						feeds with engagement statistics using custom APIs, vanilla
						JavaScript, and ChartJS.
					</li>
					<li>
						Created a manager portal, contractor portal, and consumer facing
						website in Angular to automate the planning and execution of
						hundreds of events annually.
					</li>
					<li>
						Created a native Android app featuring news updates, event tracking,
						and a co-worker directory for a major international law firm of over
						2,000 lawyers.
					</li>
				</ul>
			</div>*/}
			<div className="max-w-2xl px-2 mx-auto mb-4 md:px-0">
				<H2>Languages & Technologies</H2>
				<Hr className="mb-2" />
				<ToolsListPills />
			</div>
			<div className="max-w-2xl px-2 mx-auto mb-4 md:px-0">
				<H2>Mentoring</H2>
				<Hr className="mb-2" />
				<Mentoring />
			</div>
			<div className="max-w-2xl px-2 mx-auto mb-4 md:px-0">
				<H2>Find Me Around the Net</H2>
				<Hr className="mb-2" />
				<div className="text-right">
					<SocialLinks />
				</div>
			</div>
		</main>
	);
}
