export function arrSortBubble(arr: Array<any>): Array<any> {
	let countOperations = 0;

	for (let maxWay: number = arr.length; maxWay > 1; maxWay--) {
		// console.log(maxWay);
		for (let i: number = 0; i < maxWay; i++) {
			if (arr[i] > arr[i + 1]) {
				let temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
			}

			countOperations++;
		}
	}

	console.log('arrSortBubble countOperations', countOperations);
	return arr;
}

export function arrSortSelection(arr: Array<any>): Array<any> {
	let countOperations = 0;

	for (let i: number = 0; i < arr.length - 1; i++) {
		let idx: number = i;

		for (let k = i + 1; k < arr.length; k++) {
			if (arr[k] < arr[idx]) {
				idx = k;
			}
		}

		let temp = arr[i];
		arr[i] = arr[idx];
		arr[idx] = temp;

		countOperations++;
	}

	console.log('arrSortSelection countOperations', countOperations);
	return arr;
}

// Читать Оценка сложности алгоритмов
// https://habr.com/ru/articles/104219/