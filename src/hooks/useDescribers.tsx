const jhDescriptionList = [
	'Dungeon Diver',
	'Freckled Latino',
	'Pro-Tailwind Cyclist',
	'Sci-fi Enthusiast',
	'Tea Drinker',
];

const laloDescriptionList = [
	'Meow Meower',
	'Meow Meowo',
	'Meow-Meow Meow',
	'Meow-meow Meow',
	'Meow mew Meower',
];

export default function useDescribers(arg?: 'Lalo') {
	const list =
		arg?.toLocaleLowerCase() === 'lalo'
			? laloDescriptionList
			: jhDescriptionList;

	function all(): string[] {
		return list;
	}

	function random(): string {
		if (list.length === 1) return list[0];

		const randomIndex = Math.floor(Math.random() * list.length);
		return list[randomIndex];
	}

	function semirandom(prev?: string): string {
		if (list.length === 1) return list[0];

		if (!prev) return random();

		let nextDescriber = random();
		while (nextDescriber === prev) {
			nextDescriber = random();
		}
		return nextDescriber;
	}

	return { all, random, semirandom };
}
