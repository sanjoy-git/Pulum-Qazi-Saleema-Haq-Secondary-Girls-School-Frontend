import { Book } from 'phosphor-react';
import Container from '../components/Container';
import localDB from '../database/localDB.json'
import PageTitle from '../components/PageTitle';

export default function Magazine() {
	return (
		<Container>
			<PageTitle title='Magazine'/>

			<div className='flex flex-wrap justify-center items-center gap-2'>
				<a className=' px-2 py-1 bg-site-color rounded-md' href={localDB?.googleDoc?.magazineShareUrl} target="_blank" rel="noopener noreferrer">
				<i className=' float-left pr-1'><Book size={28}/></i>
					<span className=' font-bold'>View Magazine</span>					
				</a>
			</div>
		</Container>
	);
}
