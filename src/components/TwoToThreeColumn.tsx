import { ReactNode } from 'react';

interface TwoToThreeColumnProps {
	children: ReactNode;
	className?: string;
}

export default function TwoToThreeColumn({
	children,
	className,
}: TwoToThreeColumnProps) {
	return className ? (
		<div className={`inline-block w-1/2 md:w-1/3 ${className}`}>{children}</div>
	) : (
		<div className="inline-block w-1/2 md:w-1/3">{children}</div>
	);
}
