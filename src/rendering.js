import axios from "axios";


const toCapitalize = str => {
	if (str == '') return '';
	let words = str.split(" ");
	return words.map((word) => {
		return word[0].toUpperCase() + word.substring(1);
	}).join(" ");
}




export { toCapitalize }; 