import * as React from 'react';
import { contextProvider, noticesObjectType } from '../database/contextStore.js';
import Container from '../components/Container.js';
import { CaretLeft, CaretRight } from 'phosphor-react';
import { Skeleton, SkeletonLine } from 'keep-react';
import PageTitle from '../components/PageTitle.js';
import { TextSlider } from '../components/Sliders.js';
// sanjoy-git

export default function Notices() {
	const { notices } = React.useContext(contextProvider);

	const noticeShowNumber: number = 2;
	const [noticesPage,setNoticesPage] = React.useState<number>(1);

	const noticesTotalPagesNumber = Math.ceil(notices?.length / noticeShowNumber);

	console.log(notices)

	return (
		<div>
		<Container>
			<TextSlider topNotice={notices[0]}/>
		</Container>
		<Container>
			<PageTitle title='Notices' />
			{
				notices ?
					<section>
						{/* Notices */}
						<div className='space-y-2 px-1'>
							<hr className=' border-gray-400' />
							{
								notices?.filter((item: noticesObjectType, index: number) => {
									if (item) {
										return index < noticeShowNumber * noticesPage && index >= (noticeShowNumber * noticesPage)-noticeShowNumber;
									}
								}).map((item: noticesObjectType, index: number) => {
									return (
										<div key={index}>
											<p className='pb-2 text-sm grid grid-cols-11 items-center gap-1 text-center'>
												<i className=' col-span-1 p-0.5 max-w-10 font-semibold rounded-full ring-1 ring-teal-500'>{item?.serialNo}</i>
												<span className=' col-span-2 xl:col-span-1'>{item?.timestamp}</span>
												<span className=' col-span-6 xl:col-span-8'>{item?.noticeTitle}</span>
												<a className=' col-span-2 xl:col-span-1 rounded-md px-1 py-0.5 bg-teal-500 hover:bg-teal-600' href={item?.noticePdfFile} target="_blank" rel="noopener noreferrer">View</a>
											</p>
											<hr className=' border-gray-400' />
										</div>
									)
								})
							}

						</div>

						{/* Pagination */}
						<div className=' font-semibold flex justify-center items-center gap-2 mt-2'>
							<button type='button' className=' cursor-pointer  px-1 py-0.5 rounded-md  ring-1 hover:bg-teal-500' disabled={noticesPage <=1 ? true : false} onClick={() => setNoticesPage(pre => pre - 1)}>
								<CaretLeft size={20} color='teal' />
							</button>

							<span className=' text-[17px]  px-1.5 rounded-lg'>
								<span>{noticesPage}</span>
								<i> ... </i>
								<strong>{noticesTotalPagesNumber}</strong>
							</span>

							<button type='button' className=' cursor-pointer px-1 py-0.5 rounded-md  ring-1 hover:bg-teal-500' disabled={noticesPage >= noticesTotalPagesNumber ? true : false} onClick={() => setNoticesPage(pre => pre + 1)}>
								<CaretRight size={20} color='teal' />
							</button>
						</div>
					</section> :
					<Skeleton>
						<div className=' grid grid-cols-5 gap-1'>
							<SkeletonLine className='h-6' />
							<SkeletonLine className='h-6 col-span-3' />
							<SkeletonLine className='h-6' />
						</div>
						<div className=' mt-2 grid grid-cols-5 gap-1'>
							<SkeletonLine className='h-6' />
							<SkeletonLine className='h-6 col-span-3' />
							<SkeletonLine className='h-6' />
						</div>
					</Skeleton>
			}
		</Container>
		</div>

	);
}
