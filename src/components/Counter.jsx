import React, {useState} from 'react';
import Button from "./ui/button/Button";

const Counter = function () {
	const [counter, setCounter] = useState(7);

	function increment() {
		setCounter(counter + 1);
	}

	function decrement() {
		setCounter(counter - 1);
	}

	function clear() {
		setCounter(0);
	}

	return (
		<div className="counter">
			<Button
				btnClass="counter__btn btn--primary btn--icon"
				onClick={increment}
			>+
			</Button>
			<Button
				disabled={counter === 0}
				btnClass="counter__btn btn--secondary btn--icon"
				onClick={decrement}
			>-
			</Button>
			<Button
				disabled={counter === 0}
				btnClass="counter__btn btn--secondary"
				onClick={clear}
			>
				Очистить
			</Button>

			<h3 className="counter__title">
				{counter}
			</h3>
		</div>
	);
}

export default Counter;