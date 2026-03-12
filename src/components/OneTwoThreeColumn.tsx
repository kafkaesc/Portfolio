import { ReactNode } from 'react';
import clsx from 'clsx';

interface OneTwoThreeColumnProps {
	children: ReactNode;
	className?: string;
}

export default function OneTwoThreeColumn({
	children,
	className,
}: OneTwoThreeColumnProps) {
	return (
		<div className={clsx('inline-block w-full sm:w-1/2 md:w-1/3', className)}>
			{children}
		</div>
	);
}
