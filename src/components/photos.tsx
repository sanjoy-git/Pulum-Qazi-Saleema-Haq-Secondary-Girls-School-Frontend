import { Modal, ModalAction, ModalContent } from "keep-react";

export interface IPhotosProps {
	photosUrlsOrDriveFileIds: string[];
	morePhotoUrl: string;
}

export default function Photos({ photosUrlsOrDriveFileIds, morePhotoUrl }: IPhotosProps) {
	return (
		<div className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3'>
			{
				photosUrlsOrDriveFileIds?.map((item: any, index: number) => {
					return (
						<div key={index}>
							<Modal>
								<ModalAction asChild>
									<img className=' rounded-md w-full' src={item} alt="" />
								</ModalAction>
								<ModalContent className="max-w-[40rem] lg:max-w-[50rem] m-1.5">
									<img className=' rounded-md w-full' src={item} alt="" />
								</ModalContent>
							</Modal>
						</div>
					)
				})
			}

			{
				morePhotoUrl &&
				<div className=" min-h-32 ring-1 ring-teal-600 rounded-md flex justify-center items-center">
					<a className=" ring-1 ring-teal-500 hover:bg-teal-500 text-center py-1 rounded-md px-3 text-xl " href={morePhotoUrl} target="_blank" rel="noopener noreferrer">More..</a>
				</div>
			}
		</div>
	);
}
