function toArr(obj) {
	var arr = [];
	for (key in obj) {
		arr.push([key, obj[key]]);
	}
	return arr;
}
