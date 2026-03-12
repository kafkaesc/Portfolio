import clsx from 'clsx';

interface HrProps extends React.HTMLAttributes<HTMLHRElement> {}

export default function Hr({ className }: HrProps) {
	return <hr className={clsx('border-2 border-highlight', className)} />;
}
