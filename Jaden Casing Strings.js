String.prototype.toJadenCase = function () {
	let tmp = this.valueOf();
	let result = "";
	result += tmp[0].toUpperCase()
	for (let i = 1; i < tmp.length; i++) {
		if (tmp[i - 1] == " ") {
			result += tmp[i].toUpperCase()
		}
		else {
			result += tmp[i];
		}
	}
	console.log(result)
	return result;
	//   console.log(result.toUpperCase());
};	