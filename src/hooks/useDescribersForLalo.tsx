const laloDescriptionList = [
	'Meow Meower',
	'Meow Meowo',
	//'Native Texan',
	'Meow-Meow Meow',
	'Meow-meow Meow',
	'Meow Meower',
];

export default function useDescribersForLalo() {
	function all(): string[] {
		return laloDescriptionList;
	}

	function random(): string {
		const randomIndex = Math.floor(Math.random() * laloDescriptionList.length);
		return laloDescriptionList[randomIndex];
	}

	function semirandom(prev?: string): string {
		if (!prev) return random();

		let nextDescriber = random();
		while (nextDescriber.toLocaleLowerCase() === prev.toLocaleLowerCase()) {
			nextDescriber = random();
		}
		return nextDescriber;
	}

	return { all, random, semirandom };
}
