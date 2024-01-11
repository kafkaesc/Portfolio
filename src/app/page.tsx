import A from '@/elements/A';
import Jhumbotron from '@/components/Jhumbotron';

export default function Home() {
	return (
		<main>
			<Jhumbotron />
			<div className="text-center">
				<A href="https://github.com/kafkaesc" rel="noreferrer" target="_blank">
					GitHub
				</A>
			</div>
		</main>
	);
}
