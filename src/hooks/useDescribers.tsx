const jhDescriptionList = [
	'Dungeon Diver',
	'Freckled Latino',
	'Native Texan',
	'Pro-Tailwind Cyclist',
	'Sci-fi Enthusiast',
	'Tea Drinker',
];

export default function useDescribers() {
	function all(): string[] {
		return jhDescriptionList;
	}

	function random(): string {
		const randomIndex = Math.floor(Math.random() * jhDescriptionList.length);
		return jhDescriptionList[randomIndex];
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
