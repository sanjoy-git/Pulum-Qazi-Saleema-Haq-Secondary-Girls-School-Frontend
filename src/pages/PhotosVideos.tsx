import * as React from 'react';
import { contextProvider } from '../database/contextStore.js';
import { Skeleton, SkeletonLine } from 'keep-react';
import Container from '../components/Container.js';
import Photos from '../components/photos.js';
import Videos from '../components/Videos.js';
import PageTitle from '../components/PageTitle.js';
import localDB from '../database/localDB.json';


export default function PhotosVideos() {
	const { basicInfo,youtube } = React.useContext(contextProvider);
	return (
		<div>
			
			{/* Photos */}
			<Container>
			<PageTitle title="Photos" />
				{
					basicInfo?.institutePhotosUrls ? <Photos photosUrlsOrDriveFileIds={basicInfo?.institutePhotosUrls} morePhotoUrl={localDB?.photoGalleryUrl}/> :
						<Skeleton className="flex max-w-md items-center gap-3">
							<SkeletonLine className="w-32 aspect-video" />
							<SkeletonLine className="w-32 aspect-video" />
							<SkeletonLine className="w-32 aspect-video" />
						</Skeleton>
				}

			</Container>

			{/* Youtube videos */}
			<Container>
				<PageTitle title='Videos'/>
				{
					youtube ? <Videos youtubeVideosUrlsOrIds={basicInfo?.instituteYoutubeVideoUrl} showVideoNumber={3} moreVideoUrl={localDB?.youtubeUrl}/> :
						<Skeleton className="flex items-center gap-3">
							<SkeletonLine className="w-52 aspect-video" />
							<SkeletonLine className="w-52 aspect-video" />
							<SkeletonLine className="w-52 aspect-video" />
							<a className='w-40 text-center aspect-video ring-1 ring-teal-500 hover:bg-teal-500 py-1 px-3 rounded-md text-xl' href={localDB?.youtubeUrl} target="_blank" rel="noopener noreferrer">More...</a>
						</Skeleton>
				}

			</Container>

		</div>
	);
}
