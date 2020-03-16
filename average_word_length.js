function avgWordLengthCalc(str) {
	var words = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").split(" ");
	var lengthAll = 0;
	for (const word of words) {
		lengthAll += word.length;
	}
	return lengthAll / words.length;
}
