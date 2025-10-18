import * as React from 'react';
import { contextProvider, studentsObjectType } from '../database/contextStore.js';
import Container from '../components/Container.js';
import {StudentCard} from '../components/cards.js';
import PageTitle from '../components/PageTitle.js';
import { Skeleton, SkeletonLine } from 'keep-react';


export default function Students() {
	const { students,basicInfo } = React.useContext(contextProvider);

	return (
		<div>
			<Container>
				<div>
					<p className='text-center'>
						{basicInfo?.studentsNote} 
					</p>
				</div>
			</Container>
			{/* Class-6 */}
			<Container>
				<PageTitle title='Class-6' />

				<div className=' grid grid-cols-2 sm:grid-cols-5 md:grid-cols-7 gap-3'>
					{
						students?.class6 ? 
						students.class6.map((item: studentsObjectType, index) => {
							return (
								<div key={index}>
									<StudentCard student={item} />
								</div>
							)
						}):
						<Skeleton>
							<SkeletonLine className=' h-52'/>
						</Skeleton>
					}
				</div>
			</Container>

			{/* Class-7 */}
			<Container>
				<PageTitle title='Class-7' />

				<div className=' grid grid-cols-2 sm:grid-cols-5 md:grid-cols-7 gap-3'>
					{
						students?.class7 ? 
						students.class7.map((item: studentsObjectType, index) => {
							return (
								<div key={index}>
									<StudentCard student={item} />
								</div>
							)
						}):
						<Skeleton>
							<SkeletonLine className=' h-52'/>
						</Skeleton>
					}
				</div>
			</Container>
			{/* Class-8 */}
			<Container>
				<PageTitle title='Class-8' />

				<div className=' grid grid-cols-2 sm:grid-cols-5 md:grid-cols-7 gap-3'>
					{
						students?.class8 ? 
						students.class8.map((item: studentsObjectType, index) => {
							return (
								<div key={index}>
									<StudentCard student={item} />
								</div>
							)
						}):
						<Skeleton>
							<SkeletonLine className=' h-52'/>
						</Skeleton>
					}
				</div>
			</Container>

			{/* Class-9 */}
			<Container>
				<PageTitle title='Class-9' />

				<div className=' grid grid-cols-2 sm:grid-cols-5 md:grid-cols-7 gap-3'>
					{
						students?.class9 ? 
						students.class9.map((item: studentsObjectType, index) => {
							return (
								<div key={index}>
									<StudentCard student={item} />
								</div>
							)
						}):
						<Skeleton>
							<SkeletonLine className=' h-52'/>
						</Skeleton>
					}
				</div>
			</Container>
			{/* Class-new-10 */}
			<Container>
				<PageTitle title='Class-New-10' />

				<div className=' grid grid-cols-2 sm:grid-cols-5 md:grid-cols-7 gap-3'>
					{
						students?.classNew10 ? 
						students.classNew10.map((item: studentsObjectType, index) => {
							return (
								<div key={index}>
									<StudentCard student={item} />
								</div>
							)
						}):
						<Skeleton>
							<SkeletonLine className=' h-52'/>
						</Skeleton>
					}
				</div>
			</Container>

			{/* Class-old-10 */}
			<Container>
				<PageTitle title='Class-Old-10' />

				<div className=' grid grid-cols-2 sm:grid-cols-5 md:grid-cols-7 gap-3'>
					{
						students?.classOld10 ? 
						students.classOld10.map((item: studentsObjectType, index) => {
							return (
								<div key={index}>
									<StudentCard student={item} />
								</div>
							)
						}):
						<Skeleton>
							<SkeletonLine className=' h-52'/>
						</Skeleton>
					}
				</div>
			</Container>
				
		</div>
	);
}
