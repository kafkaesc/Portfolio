import { renderHook } from '@testing-library/react';
import useDescribers from './useDescribers';

const jhList = [
	'Dungeon Diver',
	'Freckled Latino',
	'Pro-Tailwind Cyclist',
	'Sci-fi Enthusiast',
	'Tea Drinker',
];

const laloList = [
	'Meow Meower',
	'Meow Meowo',
	'Meow-Meow Meow',
	'Meow-meow Meow',
	'Meow mew Meower',
];

it('Gets the default JH description list from all() ', () => {
	const { result } = renderHook(() => useDescribers());
	expect(result.current.all()).toEqual(jhList);
});

it('Gets the Lalo description list when "Lalo" is passed to all()', () => {
	const { result } = renderHook(() => useDescribers('Lalo'));
	expect(result.current.all()).toEqual(laloList);
});

it('Gets a string from the default JH list from random()', () => {
	const { result } = renderHook(() => useDescribers());
	expect(jhList).toContain(result.current.random());
});

it('Gets a string from the Lalo list from random() when "Lalo" is passed', () => {
	const { result } = renderHook(() => useDescribers('Lalo'));
	expect(laloList).toContain(result.current.random());
});

it('Gets a string from the JH list from semirandom() when called without prev', () => {
	const { result } = renderHook(() => useDescribers());
	expect(jhList).toContain(result.current.semirandom());
});

it('Gets a string from the JH list from semirandom() when called with prev', () => {
	const { result } = renderHook(() => useDescribers());
	const prev = jhList[0];
	for (let i = 0; i < 12; i++) {
		const next = result.current.semirandom(prev);
		expect(next).not.toBe(prev);
		expect(jhList).toContain(next);
	}
});
