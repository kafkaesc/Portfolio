'use client';

import { useEffect, useRef, useState } from 'react';
import useDescribersForLalo from '@/hooks/useDescribersForLalo';

export default function Describer() {
	const [describer, setDescriber] = useState('');
	const ref = useRef<HTMLSpanElement>(null);
	const ud = useDescribersForLalo();

	useEffect(() => {
		setDescriber(ud.random());
		const isChrome = navigator?.userAgent.indexOf('Chrome') > -1;
		const isSafari = !isChrome && navigator?.userAgent.indexOf('Safari') > -1;

		const rotateSafari = () => {
			setDescriber((prev) => {
				ref.current?.classList.add('animate-describer-slide-in');
				return ud.semirandom(prev);
			});
			ref.current?.classList.remove('animate-describer-slide-in');
		};

		const rotate = () => {
			setDescriber((prev) => ud.semirandom(prev));
		};

		const interval = setInterval(isSafari ? rotateSafari : rotate, 5000);

		return () => clearInterval(interval);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<span ref={ref} className="inline-block pr-2 animate-describer-slide-in">
			{describer}
		</span>
	);
}
