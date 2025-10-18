import * as React from 'react';
import localDB from '../database/localDB.json';
import { NavLink } from 'react-router';
import { FooterSlider } from './Sliders.js';
import { contextProvider } from '../database/contextStore.js';
import { Skeleton, SkeletonLine } from 'keep-react';
import { Envelope, FacebookLogo, MapPin, PhoneCall, PinterestLogo, YoutubeLogo } from 'phosphor-react';


const footerLinks = [
	{
		title: "Quick Links",
		links: [
			{
				linkName: "মাধ্যমিক ও উচ্চ শিক্ষা বিভাগ",
				link: "https://www.shed.gov.bd"
			},
			{
				linkName: "মাধ্যমিক ও উচ্চ শিক্ষা অধিদপ্তর",
				link: "https://dshe.gov.bd"
			},
			{
				linkName: " জাতীয় ওয়েব পোর্টাল",
				link: "https://bangladesh.gov.bd"
			},
			{
				linkName: "Ministry of education Board",
				link: "http://www.educationboard.gov.bd"
			},
			{
				linkName: "Education Board Results",
				link: "http://www.educationboardresults.gov.bd"
			},
			{
				linkName: "ব্যানবেইস",
				link: "https://banbeis.gov.bd"
			},
			{
				linkName: "শিক্ষক বাতায়ন",
				link: "hhttps://www.teachers.gov.bd"
			},
			{
				linkName: "EMIS",
				link: "http://www.emis.gov.bd/emis"
			},
		]
	},
	{
		title: "Learning Links",
		links: [
			{
				linkName: "10 Minute School",
				link: "https://10minuteschool.com"
			},
			{
				linkName: "Shikho",
				link: "https://shikho.com/"
			},
			{
				linkName: "W3 Schools",
				link: "https://www.w3schools.com"
			},
		]
	},
	{
		title: "Helping Links",
		links: [
			{
				linkName: "QR-Scanner & Generator",
				link: "https://qrcodeeasy.netlify.app"
			},
			{
				linkName: "Online Cam Scanner",
				link: "https://onlinecamscanner.com"
			},
			{
				linkName: "Remove Image BG",
				link: "https://www.remove.bg"
			},
			{
				linkName: "Image Resizer",
				link: "https://imageresizer.com"
			},
			{
				linkName: "PDF",
				link: "https://www.ilovepdf.com"
			},
		]
	},
	{
		title: "Emergency Hotline",
		links: [
			{
				linkName: "সরকারি তথ্য ও সেবা ৩৩৩",
				link: "tel:333"
			},
			{
				linkName: "জরুরি সেবা ৯৯৯",
				link: "tel:999"
			},
			{
				linkName: "ফায়ার সার্ভিস ১০২",
				link: "tel:102"
			},
			{
				linkName: "নারী ও শিশু নির্যাতন প্রতিরোধ ১০৯",
				link: "tel:109"
			},
			{
				linkName: "দুদক ১০৬",
				link: "tel:106"
			},
			{
				linkName: "দুর্যোগ ১০৯০",
				link: "tel:1090"
			},
			{
				linkName: "বাংলাদেশ কর্মচারী কল্যাণ বোর্ড ১৬১০৯",
				link: "tel:16109"
			},
			{
				linkName: "সর্বজনীন পেনশন স্কিম ১৬১৩১ ",
				link: "tel:16131"
			},
		]
	},
]

const defaultNav = [
	{
		pathName: "Home",
		path: "/"
	},
	{
		pathName: "PrivacyPolicy",
		path: "/privacypolicy"
	}
]

export default function Footer() {
	const { basicInfo } = React.useContext(contextProvider);

	return (
		<div className=' mt-4'>
			{/* Footer slider */}
			<FooterSlider sliders={localDB?.famousPeople} />

			{/*Main footer */}
			<section className=' mt-2 p-3 bg-gray-200 dark:bg-gray-800 rounded-md'>

				{/*Logo & contacts */}
				<div className=' xl:float-left'>
					<div className=' py-2'>
						<img className=' inline w-10' src={localDB?.instituteLogo} alt="" />
						<h2 className=' px-1 inline font-bold text-[18px] sm:text-xl'>{localDB?.instituteName?.english}</h2>
					</div>

					<div>
						{
							basicInfo?.instituteContacts ?
								<ul className=' font-bold'>
									<li className='flex items-center gap-1'>
										<PhoneCall size="20" color='#00AEAE' weight='fill' />
										<span>{`+880${basicInfo?.instituteContacts[0]}`}</span>
										<a className=' text-sm px-1 py-0.5 rounded-md custom-color' href={`tel:+880${basicInfo?.instituteContacts[0]}`}>Call</a>
									</li>
									<li className='flex items-center gap-1'><Envelope size="20" color='#00AEAE' weight='fill' />
										<span>{basicInfo?.instituteContacts[1]}</span>
										<a className=' text-sm  px-1 py-0.5  rounded-md custom-color' href={`mailto:${basicInfo?.instituteContacts[1]}`}>Mail</a>
									</li>
									<li className='flex items-center gap-1'>
										<MapPin size="20" color='#00AEAE' weight='fill' />
										<span>
											{localDB?.instituteAddress?.english}
										</span>
									</li>
								</ul> :
								<Skeleton className=' space-y-1 w-64'>
									<SkeletonLine className=' h-4' />
									<SkeletonLine className=' h-4' />
									<SkeletonLine className=' h-4' />
								</Skeleton>
						}
					</div>
				</div>


				{/* Footer links section */}
				<div className=' pb-2 pt-4 flex justify-around gap-4 items-start'>

					{/* Footer links */}
					<div className='flex flex-wrap justify-between gap-4 xl:gap-10'>
						{
							footerLinks?.map((item, index) => {
								return (
									<div key={index}>
										<h3 className=' font-bold pb-1'>{item?.title}</h3>
										<ul className=' space-y-1'>
											{
												item?.links?.map((link, index) => {
													return (
														<li key={index} className=' hover:translate-x-1 transition-all'>
															<a href={link?.link} target='_blank'>{link?.linkName}</a>
														</li>
													)
												})
											}
										</ul>
									</div>
								)
							})
						}
					</div>


					{/* Default path */}
					<div>
						<h3 className=' pb-1 font-bold'>Default</h3>
						<ul className='space-y-1'>
							{
								defaultNav.map((path, index) => {
									return (
										<li key={index} className=' hover:translate-x-1 transition-all'>
											<NavLink to={path?.path}>{path?.pathName}</NavLink>
										</li>
									)
								})
							}
						</ul>
					</div>
				</div>


				<hr className=' mt-2 mb-1 border-gray-400' />

				{/* Social linkes */}
				<div className='flex gap-2 justify-center items-center pt-2'>
					<a href={localDB?.youtubeUrl} target="_blank" rel="noopener noreferrer"><YoutubeLogo size='20' weight='fill' color='red' /></a>
					<a href={localDB?.facebookPageUrl} target="_blank" rel="noopener noreferrer"><FacebookLogo size='20' weight='fill' color='blue' /></a>
					<a href={localDB?.pinterestUrl} target="_blank" rel="noopener noreferrer"><PinterestLogo size='20' weight='fill' color='red' /></a>
				</div>
			</section>

		</div>
	);
}
