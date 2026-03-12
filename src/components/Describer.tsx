'use client';

import { useEffect, useRef, useState } from 'react';
import useDescribers from '@/hooks/useDescribers';

export default function Describer() {
	const [describer, setDescriber] = useState('');
	const ref = useRef<HTMLSpanElement>(null);
	const ud = useDescribers();

	useEffect(() => {
		setDescriber(ud.random());
		const isChrome = navigator?.userAgent.indexOf('Chrome') > -1;
		const isSafari = !isChrome && navigator?.userAgent.indexOf('Safari') > -1;
		const interval = isSafari
			? setInterval(() => {
					setDescriber((prev) => {
						ref.current?.classList.add('animate-describer-slide-in');
						return ud.semirandom(prev);
					});
					ref.current?.classList.remove('animate-describer-slide-in');
				}, 5000)
			: setInterval(() => {
					setDescriber((prev) => ud.semirandom(prev));
				}, 5000);

		return () => clearInterval(interval);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<span ref={ref} className="inline-block pr-2 animate-describer-slide-in">
			{describer}
		</span>
	);
}
