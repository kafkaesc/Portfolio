const laloDescriptionList = [
	'Meow Meower',
	'Meow Meowo',
	'Meow-Meow Meow',
	'Meow-meow Meow',
	'Meow mew Meower',
];

export default function useDescribersForLalo() {
	function all(): string[] {
		return laloDescriptionList;
	}

	function random(): string {
		if (laloDescriptionList.length === 1) return laloDescriptionList[0];

		const randomIndex = Math.floor(Math.random() * laloDescriptionList.length);
		return laloDescriptionList[randomIndex];
	}

	function semirandom(prev?: string): string {
		if (laloDescriptionList.length === 1) return laloDescriptionList[0];

		if (!prev) return random();

		let nextDescriber = random();
		while (nextDescriber === prev) {
			nextDescriber = random();
		}
		return nextDescriber;
	}

	return { all, random, semirandom };
}
