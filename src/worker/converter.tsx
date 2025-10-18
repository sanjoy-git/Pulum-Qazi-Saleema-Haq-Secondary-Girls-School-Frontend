// Make cammel case
function toCammelCase(text:string) {
	const textClean = text?.replace(" ", "")?.replace(" ","")?.replace("(", "")?.replace(")", "")?.replace("\r", "");
	return textClean?.charAt(0)?.toLowerCase() + textClean?.slice(1);
}


// Tsv convert object row wise single row single array | basicInfo
export function tsvToObjectCustomSheet (tsv:string) {

	const lines:string[] = tsv.split("\n");
	const result:any={};

	for (let i = 0; i < lines.length; i++) {
		const currentline = lines[i].split("\t");

		const filterCurrentLine = currentline.filter(item => {
			return item != "" && item != "\r" && item != currentline[0];
		})

		result[currentline[0]] = filterCurrentLine;
	}

	// console.log("Run tsvToObjectRowWise");

	return result; //JavaScript object
	// return JSON.stringify(result); //JSON
}


// Simple tsv to object converter | notices
export function tsvToObjectArrayNotices(tsv:string) {
	const lines:string[] = tsv.split("\n");
	const result:string[] = [];
	const headers:string[] = lines[0]?.split("\t");

	for (let i = 1; i < lines?.length; i++) {
		const obj:any = {};
		const currentline = lines[i]?.split("\t");

		for (let j = 0; j < headers?.length; j++) {
			obj[toCammelCase(headers[j])] = currentline[j];
		}

		obj["serialNo"] = i;

		result.push(obj);
	}


	// console.log("Run tsvToArrayObject")
	// console.log(result)

	return result.reverse(); //JavaScript object
	// return JSON.stringify(result); //JSON
}





// TeachersStaffsCommittee tsv to object category wise
export function tsvToObjectTeachersStaffsCommittee(tsv:string) {
	const lines:string[] = tsv.split("\n");
	// const result:string[] = [];

	type resultType={
		headTeacher:object[];
		assistantHeadTeacher:object[];
		assistantTeachers:object[];
		staffs:object[];
		savapati:object[];
		committee:object[];
	}

	const result:resultType = {
		headTeacher:[],
		assistantHeadTeacher:[],
		assistantTeachers:[],
		staffs:[],
		savapati:[],
		committee:[]
	}

	const headers:string[] = lines[0]?.split("\t");

	for (let i = 1; i < lines?.length; i++) {
		const obj:any = {};
		const currentline = lines[i]?.split("\t");

		for (let j = 0; j < headers?.length; j++) {
			obj[toCammelCase(headers[j])] = currentline[j];
		}

		if(obj?.category == "Head_Teacher" || obj?.category == "Head_Teacher\r"){
			result?.headTeacher.push(obj)
		}
		else if(obj?.category == "Assistant_Head_Teacher" || obj?.category == "Assistant_Head_Teacher\r"){
			result?.assistantHeadTeacher.push(obj)
		}
		else if(obj?.category == "Assistant_Teacher" || obj?.category == "Assistant_Teacher\r"){
			result?.assistantTeachers.push(obj)
		}
		else if(obj?.category == "Staff" || obj?.category == "Staff\r"){
			result?.staffs.push(obj)
		}
		else if(obj?.category == "Savapati" || obj?.category == "Savapati\r"){
			result?.savapati.push(obj)
		}
		else if(obj?.category == "Committee" || obj?.category == "Committee\r"){
			result?.committee.push(obj)
		}

	}

	// console.log("Run Converter Category Wise");

	return result; //JavaScript object
	// return JSON.stringify(result); //JSON
}




// Students tsv to object category wise class6 to class10
export function tsvToObjectStudentsCategoryWise(tsv:string) {
	const lines:string[] = tsv.split("\n");
	// const result:string[] = [];

	type resultType={
		class6:object[];
		class7:object[];
		class8:object[];
		class9:object[];
		classNew10:object[];
		classOld10:object[];
	}

	const result:resultType = {
		class6:[],
		class7:[],
		class8:[],
		class9:[],
		classNew10:[],
		classOld10:[]
	}

	const headers:string[] = lines[0]?.split("\t");

	for (let i = 1; i < lines?.length; i++) {
		const obj:any = {};
		const currentline = lines[i]?.split("\t");

		for (let j = 0; j < headers?.length; j++) {
			obj[toCammelCase(headers[j])] = currentline[j];
		}

		if(obj?.class == "Class-6" || obj?.class == "Class-6\r"){
			result?.class6.push(obj)
		}
		else if(obj?.class == "Class-7" || obj?.class == "Class-7\r"){
			result?.class7.push(obj)
		}
		else if(obj?.class == "Class-8" || obj?.class == "Class-8\r"){
			result?.class8.push(obj)
		}
		else if(obj?.class == "Class-9" || obj?.class == "Class-9\r"){
			result?.class9.push(obj)
		}
		else if(obj?.class == "Class-New-10" || obj?.class == "Class-New-10\r"){
			result?.classNew10.push(obj)
		}
		else if(obj?.class == "Class-Old-10" || obj?.class == "Class-Old-10\r"){
			result?.classOld10.push(obj)
		}

	}

	// console.log("Run Converter Category Wise");

	return result; //JavaScript object
	// return JSON.stringify(result); //JSON
}



