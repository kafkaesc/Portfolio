const jhDescriptionList = [
	'Dungeon Diver',
	'Freckled Latino',
	'Pro-Tailwind Cyclist',
	'Sci-fi Enthusiast',
	'Tea Drinker',
];

export default function useDescribers() {
	function all(): string[] {
		return jhDescriptionList;
	}

	function random(): string {
		if (jhDescriptionList.length === 1) return jhDescriptionList[0];

		const randomIndex = Math.floor(Math.random() * jhDescriptionList.length);
		return jhDescriptionList[randomIndex];
	}

	function semirandom(prev?: string): string {
		if (jhDescriptionList.length === 1) return jhDescriptionList[0];

		if (!prev) return random();

		let nextDescriber = random();
		while (nextDescriber === prev) {
			nextDescriber = random();
		}
		return nextDescriber;
	}

	return { all, random, semirandom };
}
