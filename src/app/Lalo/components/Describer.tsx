'use client';

import { useEffect, useState } from 'react';
import useDescribersForLalo from '@/hooks/useDescribersForLalo';

export default function Describer() {
	const [describer, setDescriber] = useState('');
	const ud = useDescribersForLalo();

	useEffect(() => {
		setDescriber(ud.random());
		const isChrome = navigator?.userAgent.indexOf('Chrome') > -1;
		const isSafari = !isChrome && navigator?.userAgent.indexOf('Safari') > -1;
		const interval = isSafari
			? setInterval(() => {
					const Ld = document.getElementById('lalo_describer');
					setDescriber((prev) => {
						Ld!.classList.add('animate-describer-slide-in');
						return ud.semirandom(prev);
					});
					Ld!.classList.remove('animate-describer-slide-in');
			  }, 5000)
			: setInterval(() => {
					setDescriber((prev) => ud.semirandom(prev));
			  }, 5000);

		return () => clearInterval(interval);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<span
			id="lalo_describer"
			className="inline-block pr-2 animate-describer-slide-in"
		>
			{describer}
		</span>
	);
}
