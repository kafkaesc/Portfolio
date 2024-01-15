'use client';

import { useEffect, useState } from 'react';
import useDescribers from '@/hooks/useDescribers';

const isChrome = navigator?.userAgent.indexOf('Chrome') > -1;
const isSafari = !isChrome && navigator?.userAgent.indexOf('Safari') > -1;

export default function Describer() {
	const [describer, setDescriber] = useState('');
	const ud = useDescribers();

	useEffect(() => {
		setDescriber(ud.random());
		const interval = isSafari
			? setInterval(() => {
					const jhd = document.getElementById('jh_describer');
					setDescriber((prev) => {
						jhd!.classList.add('animate-describer-slide-in');
						return ud.semirandom(prev);
					});
					jhd!.classList.remove('animate-describer-slide-in');
			  }, 5000)
			: setInterval(() => {
					setDescriber((prev) => ud.semirandom(prev));
			  }, 5000);

		return () => clearInterval(interval);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<span id="jh_describer" className="inline-block animate-describer-slide-in">
			{describer}
		</span>
	);
}
