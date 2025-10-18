import { Book } from 'phosphor-react';
import Container from '../components/Container';
import localDB from '../database/localDB.json'
import PageTitle from '../components/PageTitle';

export default function Library() {
	return (
		<Container>

			<PageTitle title='Library'/	>

			<div className='flex flex-wrap justify-center items-center gap-2'>
				<a className=' px-2 py-1 bg-site-color rounded-md' href={localDB?.googleSheet?.libraryShareUrl} target="_blank" rel="noopener noreferrer">
					<i className=' float-left pr-1'><Book size={28} /></i>
					<span className=' font-bold'>View Books</span>
				</a>
				<a className=' px-2 py-1 bg-site-color rounded-md' href={localDB?.libraryVideoGalleryUrl} target="_blank" rel="noopener noreferrer">
					<i className=' float-left pr-1'><Book size={28} /></i>
					<span className=' font-bold'>View Videos</span>
				</a>
			</div>
		</Container>
	);
}
