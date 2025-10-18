// sanjoy-git
import * as React from 'react';
import localDB from '../database/localDB.json';
import Container from '../components/Container';
import { BellSimple, Plug, SignOut, Warning } from 'phosphor-react';
import PageTitle from '../components/PageTitle';
import {contextProvider} from '../database/contextStore.js';

const adminNav = [
	{
		icon: <BellSimple size={16} weight='fill' />,
		text: "Notice Form",
		addUrl: localDB?.googleForms?.admin?.notices
	},
	{
		icon: <Plug size={16} weight='fill' />,
		text: "Result Sheet",
		addUrl: localDB?.googleSheet?.resultsShareUrl
	},
	{
		icon: <Plug size={16} weight='fill' />,
		text: "Teacher Staff Committee Form",
		addUrl: localDB?.googleForms?.admin?.teachersStaffsCommittee
	},
	{
		icon: <Plug size={16} weight='fill' />,
		text: "Library Folder",
		addUrl: localDB?.googleSheet?.libraryShareUrl
	},
	{
		icon: <Plug size={16} weight='fill' />,
		text: "Magazine Doc",
		addUrl: localDB?.googleDoc?.magazineShareUrl
	},
	{
		icon: <Plug size={16} weight='fill' />,
		text: "Institute Info Doc",
		addUrl: localDB?.googleDoc?.instituteInfoShareUrl
	},
	{
		icon: <Plug size={16} weight='fill' />,
		text: "Pinterest Photo",
		addUrl: localDB?.cornerPhotoGalleryUrl
	},
	{
		icon: <Plug size={16} weight='fill' />,
		text: "Youtube Video",
		addUrl: localDB?.youtubeUrl
	},
	{
		icon: <Plug size={16} weight='fill' />,
		text: "Message View",
		addUrl: localDB?.googleSheet?.adminDenger?.messagesViewUrl
	},
]

const adminDengerNav = [
	{
		icon: <Warning size={16} weight='fill' color='red' />,
		text: "Students Sheet",
		addUrl: localDB?.googleSheet?.adminDenger?.studentsEditUrl
	},
	{
		icon: <Warning size={16} weight='fill' color='red' />,
		text: "Institute Info Web",
		addUrl: localDB?.googleSheet?.adminDenger?.instituteBasicInfoEditUrl
	},
	{
		icon: <Warning size={16} weight='fill' color='red' />,
		text: "Notices Edit",
		addUrl: localDB?.googleSheet?.adminDenger?.noticesEditUrl
	},
	{
		icon: <Warning size={16} weight='fill' color='red' />,
		text: "Teachers Staffs Committees Edit",
		addUrl: localDB?.googleSheet?.adminDenger?.teachersStaffsCommitteeEditUrl
	},
]

type adminIsLoginType = "false" | "wrong" | "true";


export default function Admin() {

		const {basicInfo} = React.useContext(contextProvider);

	
	const [adminIsLogin, setAdminIsLogin] = React.useState<adminIsLoginType>("false");

	const adminPassword = React.useRef<HTMLInputElement>(null);

	const decryptKey = "123";

	// Checking Login
	React.useEffect(() => {
		
		if(basicInfo?.passwords){
			
			const sessonGetAdminPassword = sessionStorage?.getItem("adminPassword")?.split(decryptKey)?.[0];

			const getServerAdminPassword = basicInfo?.passwords[0]?.split(decryptKey)?.[1];
	
			if (sessonGetAdminPassword === getServerAdminPassword) {
				setAdminIsLogin("true");
			}
			else {
				setAdminIsLogin("false");
				sessionStorage.removeItem("adminPassword");
			}
		}


	}, [basicInfo]);

	// Handle Admin Password
	const handleAdminPassword = (e: React.FormEvent): void => {
		e?.preventDefault();

		const getServerAdminPassword = basicInfo?.passwords[0]?.split(decryptKey)?.[1];

		if (adminPassword?.current?.value === getServerAdminPassword) {
			sessionStorage?.setItem("adminPassword", adminPassword?.current?.value + "123");
			setAdminIsLogin("true");
		}
		else {
			setAdminIsLogin("wrong");
		}
	}

	// Handle Admin LogOut
	const handleAdminLogOut = (): void => {
		sessionStorage?.removeItem("adminPassword");
		setAdminIsLogin("false");
	}

	return (
		<div>
			{
				adminIsLogin === "true" ?
					<section>
						{/* LogOut */}
						<Container>
							<div className=' flex items-center justify-between'>
								<p className=''>আপনাকে এডমিন এ স্বাগতম।</p>
								<button className=' p-1 rounded-md bg-red-500 hover:bg-red-600 font-bold' onClick={handleAdminLogOut}>
									<i className=' float-left pt-1'><SignOut size={20} weight='fill' /></i>
									<span>LogOut</span>
								</button>
							</div>
						</Container>

						{/* Admin access btn */}
						<Container>
							<PageTitle title='Admin Access' />

							<div className='flex justify-center items-center gap-2 flex-wrap'>
								{
									adminNav?.map((item, index: number) => {
										return (
											<a key={index} className=' px-2 py-1 bg-teal-500 hover:bg-teal-600 rounded-md' href={item?.addUrl} target="_blank" rel="noopener noreferrer">
												<i className=' float-left mr-1 pt-1'>{item?.icon}</i>
												<span className=' font-bold'>{item?.text}</span>
											</a>
										)
									})
								}
							</div>
						</Container>

						{/* Denger Zone*/}
						<Container>
							<PageTitle title='Denger Zone' />
							<div className='flex justify-center items-center gap-2 flex-wrap'>
								{
									adminDengerNav?.map((item, index: number) => {
										return (
											<a key={index} className=' px-2 py-1 bg-teal-500 hover:bg-teal-600 rounded-md' href={item?.addUrl} target="_blank" rel="noopener noreferrer">
												<i className=' float-left mr-1 pt-1'>{item?.icon}</i>
												<span className=' font-bold'>{item?.text}</span>
											</a>
										)
									})
								}
							</div>
						</Container>

					</section> :
					<section className=' text-center'>
						<form>
							<input className='w-48 p-1 rounded-md mt-16 ring-teal-300 ring-1 bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2' ref={adminPassword} type="password" maxLength={8} placeholder='Enter Admin Password' required />
							<button type="submit" className='p-1 cursor-pointer rounded-md ml-1.5 ring-2 ring-teal-500 font-bold bg-gray-100 dark:bg-gray-700' onClick={handleAdminPassword}>GO</button>
						</form>

						{
							adminIsLogin === "wrong" &&
							<p className=' flex items-center justify-center p-1 m-2 gap-1'>
								<i className=''><Warning weight='fill' size={20} color='red' /></i>
								<span>Password is Wrong!</span>
							</p>
						}
					</section>
			}
		</div>

	);
}
