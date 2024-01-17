import { ReactNode } from 'react';

interface OneTwoThreeColumnProps {
	children: ReactNode;
	className?: string;
}

export default function OneTwoThreeColumn({
	children,
	className,
}: OneTwoThreeColumnProps) {
	return className ? (
		<div className={`inline-block w-full sm:w-1/2 md:w-1/3 ${className}`}>
			{children}
		</div>
	) : (
		<div className="inline-block w-full sm:w-1/2 md:w-1/3">{children}</div>
	);
}
