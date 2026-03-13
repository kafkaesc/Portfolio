'use client';

import { useEffect, useRef, useState } from 'react';
import useDescribers from '@/hooks/useDescribers';

export default function Describer() {
	const [describer, setDescriber] = useState('');
	const ref = useRef<HTMLSpanElement>(null);
	const ud = useDescribers('Lalo');

	useEffect(() => {
		setDescriber(ud.random());

		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

		const interval = setInterval(() => {
			setDescriber((prev) => ud.semirandom(prev));
		}, 5000);
		return () => clearInterval(interval);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (!ref.current) return;

		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

		const el = ref.current;
		el.classList.remove('animate-describer-slide-in');
		void el.offsetWidth;
		el.classList.add('animate-describer-slide-in');
	}, [describer]);

	return (
		<span ref={ref} className="inline-block pr-2">
			{describer}
		</span>
	);
}
