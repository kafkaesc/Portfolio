interface HrProps extends React.HTMLAttributes<HTMLHRElement> {}

export default function Hr({ className }: HrProps) {
	return className ? (
		<hr className={`border-2 border-highlight ${className}`} />
	) : (
		<hr className="border-2 border-highlight" />
	);
}
