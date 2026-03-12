interface H2Props extends React.HTMLAttributes<HTMLHeadingElement> {}

export default function H2({ children, className }: H2Props) {
	return className ? (
		<h2 className={`text-2xl font-bold text-jh-black ${className}`}>
			{children}
		</h2>
	) : (
		<h2 className="text-2xl font-bold text-jh-black">{children}</h2>
	);
}
