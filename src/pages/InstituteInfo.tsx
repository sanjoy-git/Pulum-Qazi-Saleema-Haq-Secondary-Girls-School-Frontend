import * as React from 'react';
import {contextProvider} from '../database/contextStore.js';

import { Skeleton, SkeletonLine } from 'keep-react';
import Container from '../components/Container.js';
import Description from '../components/Description.js';
import PageTitle from '../components/PageTitle.js';
import localDB from '../database/localDB.json';

export default function InstituteInfo() {
	const {basicInfo} = React.useContext(contextProvider);
	return (
		<Container>
			<PageTitle title="Institute Info"/>
			{
				basicInfo?.instituteDescription && basicInfo?.instituteCoverPhotoUrl ? <Description photoUrl={basicInfo.instituteCoverPhotoUrl[0]} text={basicInfo.instituteDescription[1]} moreLink={localDB?.googleDoc?.instituteInfoShareUrl}/> :
					<Skeleton className=" my-1 space-y-1">
						<SkeletonLine className="h-40" />
						<SkeletonLine className="h-4" />
					</Skeleton>
			}
		</Container>
	);
}
