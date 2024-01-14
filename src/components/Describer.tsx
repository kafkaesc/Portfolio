'use client';

import { useEffect, useState } from 'react';
import useDescribers from '@/hooks/useDescribers';

export default function Describer() {
	const [describer, setDescriber] = useState('');
	const ud = useDescribers();

	useEffect(() => {
		setDescriber(ud.random());
		const interval = setInterval(() => {
			setDescriber((prev) => ud.semirandom(prev));
		}, 5000);

		return () => clearInterval(interval);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<span className="inline-block animate-describer-fade">{describer}</span>
	);
}
