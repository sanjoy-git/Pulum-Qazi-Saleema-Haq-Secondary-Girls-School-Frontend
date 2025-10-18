
import Container from '../components/Container.js';
import PageTitle from '../components/PageTitle.js';

export default function Contacts() {
	return (
		<div>
			{/* Message with google form */}
			<Container>
				<PageTitle title="Contacts"/>
				{/* <iframe className=' w-full h-64' src="https://docs.google.com/forms/d/e/1FAIpQLSdAwM6lJNO89J5WQPOej6xaLvWZyU3klcfqqo8shumdhis1Aw/viewform?embedded=true">Loading…</iframe> */}
			</Container>
			
			{/* School location maps */}
			<Container>
				<iframe className=' w-full h-52 rounded-md' id="gmap_canvas" src="https://maps.google.com/maps?width=600&height=400&hl=en&q=pulum%20girls&t=&z=14&ie=UTF8&iwloc=B&output=embed">Loading...</iframe> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=0a64555e9e5d0a2ffd6cd7953b0764514e97ebda'></script>
			</Container>
		</div>
	);
}



