import A from '@/elements/A';

export default function Professional() {
	return (
		<>
			<ul className="pl-5 mb-2 list-disc text-jh-black">
				<li>
					Built customizable user reactions for enterprise-level live video
					feeds along with engagement statistics using custom APIs, vanilla
					JavaScript, and ChartJS
				</li>
				<li>
					Built a manager portal, contractor portal, and consumer facing website
					in Angular to automate the planning and execution of hundreds of
					events annually
				</li>
				<li>
					Built a native Android app featuring news updates, event tracking, and
					a co-worker directory for a major international law firm of over 2,000
					lawyers
				</li>
			</ul>
			<p>
				For a deeper look at my professional experience you can{' '}
				<A href="/pdfs/Jared-Hettinger-Resume.pdf" download>
					download my résumé
				</A>
			</p>
		</>
	);
}
