import csvtojson from 'csvtojson';
import fs from 'fs';

csvtojson()
	.fromFile('./homework_1/files/grades.csv')
	.then((json)=>{
		fs.writeFile("./homework_1/files/grades.txt", jsonArrayToPreparedString(json), function(err) {
			if(err) {
				return console.log(err);
			}
			console.log("The file was saved!");
		}); 
	});

function jsonArrayToPreparedString(jsonArray) {
	let str = '';

	jsonArray.forEach((json) => {
		str += JSON.stringify(json) + '\n';
	});

	return str;
}
