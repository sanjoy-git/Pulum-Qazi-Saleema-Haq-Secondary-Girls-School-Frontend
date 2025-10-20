import { Modal, ModalAction, ModalContent } from "keep-react";
import { ArrowsOut } from 'phosphor-react'

export interface IVideosProps {
	youtubeVideosUrlsOrIds: [
		{
			id: {
				videoId: string;
			}
		}
	] | string[];
	showVideoNumber: number;
	moreVideoUrl: string;
}

export default function Videos({ youtubeVideosUrlsOrIds, showVideoNumber, moreVideoUrl }: IVideosProps) {
	return (
		<div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
			{
				youtubeVideosUrlsOrIds?.filter((item, index: number) => {
					if (item) {
						return index < showVideoNumber;
					}
				}).map((item: any, index: number) => {
					if (!item?.id) {
						var youtubeId = item?.split('v=')[1] || item?.split('/shorts/')[1];
					}
					return (
						<div key={index}>
							{
								<Modal>
									<ModalAction asChild>
										<div>
											<iframe className=' w-full aspect-video rounded-md' src={`https://www.youtube.com/embed/${item?.id?.videoId ? item.id.videoId : youtubeId}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
											<i className="cursor-pointer">
												<ArrowsOut/>
											</i>
										</div>
									</ModalAction>
									<ModalContent className="max-w-[40rem] lg:max-w-[50rem] m-1.5">
										<iframe className=' w-full aspect-video rounded-md' src={`https://www.youtube.com/embed/${item?.id?.videoId ? item.id.videoId : youtubeId}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
									</ModalContent>
								</Modal>
							}
						</div>
					)
				})
			}

			{
				moreVideoUrl &&
				<div className=" min-h-20 ring-1 ring-teal-600 rounded-md flex justify-center items-center">
					<a className=" ring-1 ring-teal-500 hover:bg-teal-500 text-center py-1 rounded-md px-3 text-xl " href={moreVideoUrl} target="_blank" rel="noopener noreferrer">More..</a>
				</div>
			}
		</div>
	);
}
