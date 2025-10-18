import { AddressBook } from 'phosphor-react';
import Container from '../components/Container';
import localDB from '../database/localDB.json'
import PageTitle from '../components/PageTitle';


export default function Admission() {
	return (
		<Container>

			<PageTitle title='Admission'/>

			<div className='flex flex-wrap justify-center items-center gap-2'>
				<a className=' px-2 py-1 bg-site-color rounded-md' href={localDB?.googleForms?.user?.studentAdmission} target="_blank" rel="noopener noreferrer">
					<i className=' float-left pr-1'><AddressBook size={28} /></i>
					<span className=' font-bold'>Student Admission</span>
				</a>
			</div>
		</Container>
	);
}
