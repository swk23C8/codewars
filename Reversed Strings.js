function solution(str) {
	//   loop through str and swap str.length index with 0
	//   str[0], str[-1]
	//   str[1], str[-2]
	//   str[2], str[-3]

	let result = '';
	for (let i = str.length - 1; i >= 0; i--) {
		result += str[i];
	}
	console.log(result)
	return result;
}