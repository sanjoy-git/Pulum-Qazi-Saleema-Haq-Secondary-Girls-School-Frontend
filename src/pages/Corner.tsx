import * as React from 'react';
import Container from '../components/Container';
import { contextProvider } from '../database/contextStore.js';
import { Skeleton, SkeletonLine } from 'keep-react';
import Photos from '../components/photos.js';
import Videos from '../components/Videos.js';
import PageTitle from '../components/PageTitle.js';
import localDB from '../database/localDB.json';



export default function Corner( ) {
	const { basicInfo } = React.useContext(contextProvider);
	return (
		<div>
			{/* Photos */}
			<Container>
				<PageTitle title="Corner Photos"/>
				{
					basicInfo?.cornerPhotosUrls ? <Photos photosUrlsOrDriveFileIds={basicInfo.cornerPhotosUrls} morePhotoUrl={localDB?.cornerPhotoGalleryUrl}/> :
						<Skeleton className="flex max-w-md items-center gap-3">
							<SkeletonLine className="w-32 aspect-video" />
							<SkeletonLine className="w-32 aspect-video" />
							<SkeletonLine className="w-32 aspect-video" />
						</Skeleton>
				}

			</Container>

			{/* Youtube videos */}
			<Container>
			<PageTitle title="Corner Videos"/>
				{
					basicInfo?.cornerYoutubeUrls ? <Videos youtubeVideosUrlsOrIds={basicInfo.cornerYoutubeUrls} showVideoNumber={3} moreVideoUrl={localDB?.cornerVideoGalleryUrl}/> :
						<Skeleton className="flex max-w-md items-center gap-3">
							<SkeletonLine className="w-48 aspect-video" />
							<SkeletonLine className="w-48 aspect-video" />
						</Skeleton>
				}

			</Container>
		</div>
	);
}
