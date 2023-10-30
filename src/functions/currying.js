function curry(f) {
	return function (a) {
		return function (b) {
			return f(a, b);
		}
	}
}

export default curry;