import * as React from 'react';
import { contextProvider } from '../database/contextStore.js';
import Container from '../components/Container.js';
import { Skeleton, SkeletonLine } from 'keep-react';
import PageTitle from '../components/PageTitle.js';

export default function PrivacyPolicy () {

	 const { basicInfo } = React.useContext(contextProvider);
	return (
		<Container>

			<PageTitle title='Privacy Policy'/>

			{
				basicInfo?.institutePrivacyPolicy ? <div>
					<p>{basicInfo.institutePrivacyPolicy[0]}</p>
				</div>:
				<Skeleton className=' space-y-1'>
					<SkeletonLine className='h-6'/>
					<SkeletonLine className='h-5'/>
				</Skeleton>
				
			}
		</Container>
	);
}
