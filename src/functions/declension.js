function getNoun(number, one, two, five) {
	if (number >= 5 && number <= 20) {
		return five;
	}
	if (number === 1) {
		return one;
	}
	if (number >= 2 && number <= 4) {
		return two;
	}
	return five;
}

export default getNoun;