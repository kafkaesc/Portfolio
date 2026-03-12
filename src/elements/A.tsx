import clsx from 'clsx';

interface AProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export default function A({ children, className, ...props }: AProps) {
	return (
		<a {...props} className={clsx('text-blue-700 hover:underline', className)}>
			{children}
		</a>
	);
}
