import clsx from 'clsx';

interface H2Props extends React.HTMLAttributes<HTMLHeadingElement> {}

export default function H2({ children, className }: H2Props) {
	return (
		<h2 className={clsx('text-2xl font-bold text-jh-black', className)}>
			{children}
		</h2>
	);
}
