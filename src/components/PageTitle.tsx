export interface IPageTitleProps {
	title:string;
}

export default function PageTitle ({title}: IPageTitleProps) {
	return (
		<div>
			<h3 className=' text-center font-bold mb-2 font-serif text-site-color'>{title}</h3>
		</div>
	);
}