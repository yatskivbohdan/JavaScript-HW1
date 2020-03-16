function maxTotal(arr) {
	arr.sort(function(a, b){return a-b});
	var sum = 0;
	for (var i = arr.length-1; i > arr.length-6; i--) {
		sum += arr[i];
	}	
	return sum;
}
