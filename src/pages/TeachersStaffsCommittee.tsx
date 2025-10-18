import * as React from 'react';
import { contextProvider, teachersStaffsCommitteeObjectType } from '../database/contextStore.js';
import { TeacherStaffCommitteeCard } from '../components/cards.js';

import Container from "../components/Container";
import PageTitle from '../components/PageTitle.js';
import { Skeleton, SkeletonLine } from 'keep-react';


function TeachersStaffsCommittee() {
	const { teachersStaffsCommittee,basicInfo } = React.useContext(contextProvider);

	return (
		<div>
			<Container>
				<p className=' text-center'>
					{basicInfo?.teacherStaffCommitteeNote}
				</p>
			</Container>


			<Container>
				<PageTitle title="Teachers" />

				<div className=' grid grid-cols-2 sm:grid-cols-5 md:grid-cols-7 gap-3'>

					{/* Head teacher */}
					{/* {teachersStaffsCommittee?.headTeacher?.map((item: teachersStaffsCommitteeObjectType, index: number) => {
						return (
							<div key={index}>
								<TeacherStaffCommitteeCard person={item} />
							</div>
						)
					})} */}

					{
						teachersStaffsCommittee?.headTeacher ? <div>
							<TeacherStaffCommitteeCard person={teachersStaffsCommittee.headTeacher[teachersStaffsCommittee.headTeacher.length - 1]} />
						</div> :
							<Skeleton>
								<SkeletonLine className=' h-52' />
							</Skeleton>
					}

					{/* Assistant head teacher */}
					{/* {teachersStaffsCommittee?.assistantHeadTeacher?.map((item: teachersStaffsCommitteeObjectType, index: number) => {
						return (
							<div key={index}>
								<TeacherStaffCommitteeCard person={item} />
							</div>
						)
					})} */}

					{
						teachersStaffsCommittee?.assistantHeadTeacher ? <div>
							<TeacherStaffCommitteeCard person={teachersStaffsCommittee.assistantHeadTeacher[teachersStaffsCommittee.assistantHeadTeacher.length - 1]} />
						</div> :
							<Skeleton>
								<SkeletonLine className=' h-52' />
							</Skeleton>
					}

					{/* Teachers */}
					{teachersStaffsCommittee?.assistantTeachers?.map((item: teachersStaffsCommitteeObjectType, index: number) => {
						return (
							<div key={index}>
								<TeacherStaffCommitteeCard person={item} />
							</div>
						)
					})}
				</div>
			</Container>

			{/* Staffs */}
			<Container>
				<PageTitle title="Staffs" />
				<div className=' grid grid-cols-2 sm:grid-cols-5 md:grid-cols-7 gap-3'>
					{teachersStaffsCommittee?.staffs?.map((item: teachersStaffsCommitteeObjectType, index: number) => {
						return (
							<div key={index}>
								<TeacherStaffCommitteeCard person={item} />
							</div>
						)
					})}
				</div>
			</Container>

			{/* Committee */}
			<Container>
				<PageTitle title="Committee" />
				<div className=' grid grid-cols-2 sm:grid-cols-5 md:grid-cols-7 gap-3'>
					{teachersStaffsCommittee?.savapati?.map((item: teachersStaffsCommitteeObjectType, index: number) => {
						return (
							<div key={index}>
								<TeacherStaffCommitteeCard person={item} />
							</div>
						)
					})}
					{teachersStaffsCommittee?.committee?.map((item: teachersStaffsCommitteeObjectType, index: number) => {
						return (
							<div key={index}>
								<TeacherStaffCommitteeCard person={item} />
							</div>
						)
					})}
				</div>
			</Container>
		</div>
	);
}


export default TeachersStaffsCommittee;