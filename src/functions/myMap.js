const arr = [1, 2, 3];

arr.map((item) => item + 1); // 2, 3, 4

Array.prototype.myMap = function (callback) {
	let draft = [];

	for (let i = 0; i < this.length; i++) {
		draft.push(callback(this[i]))
	}

	return draft;
}

