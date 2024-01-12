import A from '@/elements/A';
import Jhumbotron from '@/components/Jhumbotron';
import Portfolio from '@/components/Portfolio';

export default function Home() {
	return (
		<main>
			<Jhumbotron />
			<div className="text-center">
				<A href="https://github.com/kafkaesc" rel="noreferrer" target="_blank">
					GitHub
				</A>
			</div>
			<Portfolio />
		</main>
	);
}
