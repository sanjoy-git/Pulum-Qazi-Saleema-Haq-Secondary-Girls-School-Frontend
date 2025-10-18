import { Accordion, AccordionAction, AccordionContent, AccordionIcon, AccordionItem, AccordionTitle } from "keep-react";

export interface IDescriptionProps {
	photoUrl: string;
	text: string;
	moreLink:string;
}

export default function Description({ photoUrl, text, moreLink}: IDescriptionProps) {
	return (
		<div className=" min-h-40 flex flex-wrap gap-3 xl:gap-5 items-end justify-center">
			<section className=" py-1">
				<img
					className=' w-52 rounded-md mx-auto'
					// src={`https://lh3.google.com/u/0/d/${photo}`}
					src={photoUrl}
					loading="lazy"
					alt="Institute Cover Photo" />
			</section>

			<section className=" mt-1">
			<Accordion type="single" collapsible>
				<AccordionItem value="item-1">
					<AccordionAction>
						<AccordionTitle className="first-letter:text-teal-500">
							{text?.slice(0, 100)}
						</AccordionTitle>
						<AccordionIcon />
					</AccordionAction>
					<AccordionContent>
						{text}
						<a className=" ring-1 rounded-md px-1 pb-1 ml-2 hover:transition-all hover:bg-teal-500" href={moreLink} target="_blank" rel="noopener noreferrer"> More..</a>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
			</section>
		</div>
	);
}
