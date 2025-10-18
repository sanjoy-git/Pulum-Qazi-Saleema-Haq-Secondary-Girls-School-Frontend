import * as React from 'react';

export interface IContainerProps {
	children:React.ReactNode;
}

export default function Container ({children}: IContainerProps) {
	return (
		<div className=' mx-[2px] mt-4 md:mx-4 px-2 xl:mt-5 py-3 xl:px-5 xl:py-5 bg-gray-100 dark:bg-gray-800 rounded-md shadow-md'>
			{children}
		</div>
	);
}
