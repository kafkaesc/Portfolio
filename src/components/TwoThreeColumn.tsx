import { ReactNode } from 'react';

interface TwoThreeColumnProps {
	children: ReactNode;
	className?: string;
}

export default function TwoThreeColumn({
	children,
	className,
}: TwoThreeColumnProps) {
	return className ? (
		<div className={`inline-block w-1/2 md:w-1/3 ${className}`}>{children}</div>
	) : (
		<div className="inline-block w-1/2 md:w-1/3">{children}</div>
	);
}
