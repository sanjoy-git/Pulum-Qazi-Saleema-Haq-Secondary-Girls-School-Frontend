
export function filterTeachersStaffsCommittee (array:object[],keyword:string[]) {
	console.log(array)
	return array?.filter((item:any)=>{for (let i = 0; i < keyword.length; i++) {
		if(item.category == keyword[i]){
			return true;
		}
	}});
}
