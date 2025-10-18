// import * as React from 'react';

// TeacherStaffCommittee card
interface ITeacherStaffCommitteeCardProps {
	person: {
		profilePhoto: string;
		nameEnglish: string;
		designationEnglish: string;
	};
}


function TeacherStaffCommitteeCard({ person }: ITeacherStaffCommitteeCardProps) {
	const profileDriveFileId = person?.profilePhoto?.split("id=")?.[1];

	console.log(profileDriveFileId)

	return (
		<div className='bg-gray-200 dark:bg-gray-700 text-center p-1 rounded-md'>
			{
				profileDriveFileId ?
				<img className='mx-auto rounded-md' src={`https://lh3.google.com/u/0/d/${profileDriveFileId}`} loading="lazy" alt="Profile photo" />:
				<img className='mx-auto rounded-md' src="./avater.png" alt="Profile photo"  />
			}
			<h3 className=' font-bold'>{person?.nameEnglish}</h3>
			<span>{person?.designationEnglish}</span>
		</div>
	);
}



// Student card
interface IStudentCardProps {
	student: {
		profilePhoto: string;
		nameEnglish: string;
		class: string;
	}
}

function StudentCard({ student }: IStudentCardProps) {
	const profileDriveFileId = student?.profilePhoto?.split("id=")[1];
	return (
		<div className='bg-gray-200 dark:bg-gray-700 text-center p-1 rounded-md'>
						{
				profileDriveFileId ?
				<img className='mx-auto rounded-md' src={`https://lh3.google.com/u/0/d/${profileDriveFileId}`} loading="lazy" alt="Profile photo" />:
				<img className='mx-auto rounded-md' src="./avater.png" alt="Profile photo"  />
			}
			<h3 className=' font-bold'>{student?.nameEnglish}</h3>
			<span>{student?.class}</span>
		</div>
	);
}

export {StudentCard,TeacherStaffCommitteeCard}
