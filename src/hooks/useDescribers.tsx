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

/** The useDescribers hook provides function to get description strings from a predefined list */
export default function useDescribers(arg?: 'Lalo') {
	const list =
		arg?.toLocaleLowerCase() === 'lalo'
			? laloDescriptionList
			: jhDescriptionList;

	/** Return all descriptions from the list */
	function all() {
		return list;
	}

	/** Return a random description from the list */
	function random() {
		if (list.length === 1) return list[0];

		const randomIndex = Math.floor(Math.random() * list.length);
		return list[randomIndex];
	}

	/** Returns an item from the list other than the prev string provided */
	function semirandom(prev?: string) {
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
