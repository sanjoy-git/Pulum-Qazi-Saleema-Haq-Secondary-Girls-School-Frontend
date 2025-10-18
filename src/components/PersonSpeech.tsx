import { Accordion, AccordionAction, AccordionContent, AccordionIcon, AccordionItem, AccordionTitle } from "keep-react";


export interface IPersonSpeechProps {
	// person: {
	// 	profilePhoto: string;
	// 	nameEnglish: string;
	// 	designationEnglish: string;
	// 	speechEnglish: string;
	// }
	person:string[]
}

export default function PersonSpeech({ person }: IPersonSpeechProps) {

	// const googleDriveFileId = person?.profilePhoto?.split("id=")[1];

	return (
		<div className="flex flex-wrap items-end justify-center gap-2 xl:gap-5">
			<section className='flex items-end gap-3 py-1'>
				<img
					className=' w-28 p-1.5 rounded-full bg-gray-50 dark:bg-gray-950'
					// src={`https://lh3.google.com/u/0/d/${googleDriveFileId}`}
					src={person[0]}
					loading="lazy"
					alt="Institute Cover Photo" />


				<div>
					<strong>{person[1]}</strong> <br />
					<strong>{person[2]}</strong>
				</div>
			</section>

			<section>
				<Accordion type="single" collapsible>
					<AccordionItem value="item-1">
						<AccordionAction>
							<AccordionTitle className="first-letter:text-teal-500">
								{person[3]?.slice(0, 100)}
							</AccordionTitle>
							<AccordionIcon />
						</AccordionAction>
						<AccordionContent>
							{person[3]}
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</section>

		</div>
	);
}
