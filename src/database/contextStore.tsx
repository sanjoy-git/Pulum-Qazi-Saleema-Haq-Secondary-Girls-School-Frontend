import * as React from 'react';
import localDB from './localDB.json'
import { tsvToObjectCustomSheet, tsvToObjectArrayNotices, tsvToObjectTeachersStaffsCommittee, tsvToObjectStudentsCategoryWise } from '../worker/converter.js'


export type teachersStaffsCommitteeObjectType = {
	profilePhoto: string;
	nameEnglish: string;
	designationEnglish: string;
	contactEmail: string;
}



export type studentsObjectType = {
	nameEnglish: string;
	profilePhoto: string;
	class: string;
}



export type noticesObjectType = {
	serialNo: string;
	timestamp: string;
	noticePdfFile: string;
	noticeTitle: string;
}

interface contextProviderType {
	basicInfo: {
		instituteHomeSlidersUrls: string[];
		instituteContacts: string[];
		instituteDescription: string[];
		instituteCoverPhotoUrl: string[];
		institutePhotosUrls: string[];
		instituteYoutubeVideoUrl:string[];
		cornerPhotosUrls: string[];
		cornerYoutubeUrls: string[];
		institutePrivacyPolicy: string[];
		instituteHeadTeacher: string[];
		instituteSavapati: string[];
		passwords: string[];
		siteNotice: string[];
		studentsNote: string[];
		teacherStaffCommitteeNote: string[];
	};
	notices: [
		noticesObjectType
	];
	youtube: [
		{
			id: { videoId: string; }
		}
	];
	teachersStaffsCommittee: {
		headTeacher: [
			teachersStaffsCommitteeObjectType
		];
		assistantHeadTeacher: [
			teachersStaffsCommitteeObjectType
		];
		assistantTeachers: [
			teachersStaffsCommitteeObjectType,
			teachersStaffsCommitteeObjectType,			
			teachersStaffsCommitteeObjectType			
		]
		staffs: [
			teachersStaffsCommitteeObjectType
		];
		savapati: [
			teachersStaffsCommitteeObjectType
		];
		committee: [
			teachersStaffsCommitteeObjectType
		];
	};
	students: {
		class6: [
			studentsObjectType
		];
		class7: [
			studentsObjectType
		];
		class8: [
			studentsObjectType
		];
		class9: [
			studentsObjectType
		];
		classNew10: [
			studentsObjectType
		];
		classOld10: [
			studentsObjectType,
			studentsObjectType,
			studentsObjectType
		];
	};
};

const teachersStaffsCommitteeObject = {
	contactEmail: "",
	designationEnglish: "",
	nameEnglish: "",
	profilePhoto: "",
	speechEnglish: ""
}

const studentsObject = {
	nameEnglish: "",
	profilePhoto: "",
	class: ""
}

export const contextProvider = React.createContext<contextProviderType>({
	basicInfo: {
		instituteHomeSlidersUrls: [],
		instituteContacts: [],
		instituteDescription: [],
		instituteCoverPhotoUrl: [],
		institutePhotosUrls: [],
		instituteYoutubeVideoUrl:[],
		cornerPhotosUrls: [],
		cornerYoutubeUrls: [],
		institutePrivacyPolicy: [],
		instituteHeadTeacher: [],
		instituteSavapati: [],
		passwords: [],
		siteNotice: [],
		studentsNote: [],
		teacherStaffCommitteeNote: []
	},
	notices: [
		{
			serialNo: "",
			timestamp: "",
			noticePdfFile: "",
			noticeTitle: ""
		}
	],
	youtube: [
		{
			id: {
				videoId: ""
			}
		}
	],
	teachersStaffsCommittee:
	{
		headTeacher: [
			{
				...teachersStaffsCommitteeObject
			}
		],
		assistantHeadTeacher: [
			{
				...teachersStaffsCommitteeObject
			}
		],
		assistantTeachers: [
			{
				...teachersStaffsCommitteeObject
			},
			{
				...teachersStaffsCommitteeObject
			},
			{
				...teachersStaffsCommitteeObject
			},
		],
		staffs: [
			{
				...teachersStaffsCommitteeObject
			}
		],
		savapati: [
			{
				...teachersStaffsCommitteeObject
			}
		],
		committee: [
			{
				...teachersStaffsCommitteeObject
			}
		]
	},
	students: {
		class6: [
			{
				...studentsObject
			}
		],
		class7: [
			{
				...studentsObject
			}
		],
		class8: [
			{
				...studentsObject
			}
		],
		class9: [
			{
				...studentsObject
			}
		],
		classNew10: [
			{
				...studentsObject
			}
		],
		classOld10: [
			{
				...studentsObject
			},
			{
				...studentsObject
			},
			{
				...studentsObject
			}
		]
	}
});


interface IContextStoreProps {
	children: React.ReactNode;
}

export function ContextStore({ children }: IContextStoreProps) {

	type reducerActionTypes = {
		type: string;
		convertResult: object | object[];
	};

	function reducer(state: object, action: reducerActionTypes): any {
		if (action.type === "basicInfo") {
			return {
				...state,
				basicInfo: action?.convertResult,
				loading: false
			};
		}
		else if (action.type === "notices") {
			return {
				...state,
				notices: action?.convertResult,
				loading: false
			};
		}
		else if (action.type === "teachersStaffsCommittee") {
			return {
				...state,
				teachersStaffsCommittee: action.convertResult,
				loading: false
			};
		}
		else if (action.type === "students") {
			return {
				...state,
				students: action.convertResult,
				loading: false
			};
		}
		else if (action.type === "youtube") {
			return {
				...state,
				youtube: action?.convertResult,
				loading: false
			};
		}
	}

	const [state, dispatch] = React.useReducer(reducer, {
		basicInfo: {},
		teachersStaffsCommittee: {},
		students: {},
		youtube: [],
		notices: [],
		loading: true
	});


	React.useEffect(() => {

		// Basic info fetch
		fetch(localDB?.googleSheet?.BASIC_INFO_GET_API)
			.then(res => res.text())
			.then(tsvText => tsvToObjectCustomSheet(tsvText))
			.then(objectData => {
				dispatch({ type: "basicInfo", convertResult: objectData });
				return 0;
			})
			.catch(error => console.log(error));

		// Notices
		fetch(localDB?.googleSheet?.NOTICE_GET_API)
			.then(res => res.text())
			.then(tsvText => tsvToObjectArrayNotices(tsvText))
			.then(objectArray => {
				dispatch({ type: "notices", convertResult: objectArray });
				return 0;
			})
			.catch(error => console.log(error));

		// Youtube fetch
		// fetch(localDB?.YOUTUBE_GET_API)
		// 	.then(res => res.json())
		// 	.then(data => {
		// 		dispatch({ type: "youtube", convertResult: data?.items })
		// 		return 0;
		// 	})


		// TeachersStaffsCommittee fetch
		fetch(localDB?.googleSheet?.TEACHERS_STAFFS_COMMITTEE_GET_API)
			.then(res => res.text())
			.then(tsvText => tsvToObjectTeachersStaffsCommittee(tsvText))
			.then(objectData => {
				dispatch({ type: "teachersStaffsCommittee", convertResult: objectData });
				return 0;
			})
			.catch(error => console.log(error));

		// Students fetch
		fetch(localDB?.googleSheet?.STUDENTS_GET_API)
			.then(res => res.text())
			.then(tsvText => tsvToObjectStudentsCategoryWise(tsvText))
			.then(objectData => {
				// console.log(objectData)
				dispatch({ type: "students", convertResult: objectData });
				return 0;
			})
			.catch(error => console.log(error));

	}, [])


	return (
		<contextProvider.Provider value={state}>
			{children}
		</contextProvider.Provider>
	);
}