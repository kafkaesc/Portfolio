interface HrProps {
	className?: string;
}

export default function Hr({ className }: HrProps) {
	return className ? (
		<hr className={`border-2 border-highlight ${className}`} />
	) : (
		<hr className="border-2 border-highlight" />
	);
}
