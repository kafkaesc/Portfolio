import { ReactNode } from 'react';

interface H2Props {
	children: ReactNode;
	className?: string;
}

export default function H2({ children, className }: H2Props) {
	return className ? (
		<h2 className={`text-2xl font-bold ${className}`}>{children}</h2>
	) : (
		<h2 className="text-2xl font-bold">{children}</h2>
	);
}
