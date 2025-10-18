import { useEffect, useState } from "react";
import { Dropdown, DropdownAction, DropdownArrow, DropdownContent, DropdownItem, Switch } from "keep-react";
import { NavLink } from "react-router";
import { AddressBook, AppWindow, ArrowDown, CornersOut, Bell, BellSimple, Book, Camera,Notification, FrameCorners, PhoneCall, SignIn, UsersFour, UsersThree, ShoppingCart, Newspaper } from "phosphor-react";

export default function Navbar() {

	// DarkMode state
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {

		// DarkMode check
		if (localStorage?.getItem("darkMode") == "off") {
			document.body.classList.remove("dark");
			setIsDarkMode(false);
		}
		else{
			document.body.classList.add("dark");
			setIsDarkMode(true);
		}

	}, []);

	// Handle dark mode toggle
	const handleDarkMode = () => {

		document.body.classList.toggle("dark");

		if (!isDarkMode) {
			localStorage.removeItem("darkMode");
			setIsDarkMode(true);
		} else {
			localStorage?.setItem("darkMode", "off");
			setIsDarkMode(false);
		}
	};


	const navItem = {
		subNav: [
			{
				icon: <AppWindow size="16" weight="fill" />,
				text: "Info",
				path: "/instituteinfo"
			},
			{
				icon: <Camera size="16" weight="fill" />,
				text: "PhotosVideos",
				path: "/photosvideos"
			},
			{
				icon: <Notification size="16" weight="fill" />,
				text: "Class-Routine",
				path: "/classroutine"
			},
			{
				icon: <CornersOut size="16" weight="fill" />,
				text: "Results",
				path: "/results"
			},
			{
				icon: <Bell size="16" weight="fill" />,
				text: "Notices",
				path: "/notices"
			},
			{
				icon: <Book size="16" weight="fill" />,
				text: "Library",
				path: "/library"
			},
			{
				icon: <FrameCorners size="16" weight="fill" />,
				text: "Corner",
				path: "/corner"
			},
			{
				icon: <Newspaper size="16" weight="fill" />,
				text: "Magazine",
				path: "/magazine"
			},
			{
				icon: <ShoppingCart size="16" weight="fill" />,
				text: "Store",
				path: "/store"
			},
			{
				icon: <UsersThree size="16" weight="fill" />,
				text: "TeachersStaffsCommittee",
				path: "/teachersstaffscommittee"
			},
			{
				icon: <UsersFour size="14" weight="fill" />,
				text: "Students",
				path: "/students"
			},
			{
				icon: <AddressBook size="14" weight="fill" color="orange" />,
				text: "Admission",
				path: "/admission"
			},
			{
				icon: <PhoneCall size="16" weight="fill" />,
				text: "Contacts",
				path: "/contacts"
			}
		]
	}
	return (
		<div className=" sticky top-0 z-50 shadow-md flex justify-between items-center text-center font-bold px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800">
			<NavLink to="/corner">
				<img className=" w-[32px]" src="bd-gov-bd-100x100.png" alt="gov logo" />
			</NavLink>
			<nav className="text-site-color">
				<NavLink to="/">Home</NavLink>
			</nav>

			<div>
				<Dropdown>
					<DropdownAction>
						<span className=" flex items-center text-site-color">
							More <ArrowDown size={16} />
						</span>
					</DropdownAction>
					<DropdownContent>
						<DropdownArrow />

						<DropdownItem>
							<nav className="flex flex-wrap justify-center items-center gap-2">
								{
									navItem?.subNav?.map((nav, index) => {
										return (
											<NavLink key={index} to={nav?.path} className=" p-1 px-2 rounded-md grow flex items-center justify-center gap-1 bg-site-color">
												{nav?.icon}
												{nav?.text}
											</NavLink>
										)
									})
								}
							</nav>
						</DropdownItem>
					</DropdownContent>
				</Dropdown>
			</div>
			
			{/* Library */}
			<NavLink to="/library">
				<Book weight="fill" size={22} color="#27AE60"/>
			</NavLink>

			{/* Notification */}
			<NavLink to="/notices" className="relative">

				<BellSimple color="#27AE60" weight="fill" size={20} />
				
				{/* Tooltip notice blink */}
				{/* <span className="absolute animate-bounce -bottom-16 -right-4 -space-y-[11px]">
					<CaretUp color="#00AEAE" size={30} weight="fill" />
					<b className=" block py-1 px-4 rounded-md bg-[#00AEAE]">0</b>
				</span> */}

			</NavLink>

			{/* Dark mode toggle */}
			<Switch variant="icon" onCheckedChange={() => handleDarkMode()} />


			{/* Login Nav */}
			<NavLink to="/login">
				<SignIn weight="fill" size={22} color="#27AE60" />
			</NavLink>
		</div>
	);
}