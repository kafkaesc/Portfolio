import { ReactNode } from 'react';
import clsx from 'clsx';

interface TwoThreeColumnProps {
	children: ReactNode;
	className?: string;
}

export default function TwoThreeColumn({
	children,
	className,
}: TwoThreeColumnProps) {
	return (
		<div className={clsx('inline-block w-1/2 md:w-1/3', className)}>
			{children}
		</div>
	);
}
