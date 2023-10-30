import React, {useState} from 'react';
import Button from "../../ui/button/Button";
// import {useEffect} from "react/react.shared-subset";
// import declension from "../../../functions/declension";

/**
 * Написать хук для счётика значений и кликов
 * {number} initialValue
 * {number} clickCounter
 * {Function} callback - при очистке (например алерт)
 */
const useCounter = (initialValue: number, clickCounter: number, callback?: Function) => {
	const [counter, setCounter] = useState(initialValue);
	const [countClick, setCountClick] = useState(clickCounter);
	const [title, setTitle] = useState('');

	const howMushClicks = () => {
		setCountClick(countClick + 1);
	}

	const increment = () => {
		setCounter(counter + 1);
		howMushClicks();
	}

	const decrement = () => {
		setCounter(counter - 1);
		howMushClicks();
	}

	const clear = () => {
		setCounter(0);
		howMushClicks();
	}

	const clearClicks = () => {
		setCountClick(0);
	}

	// useEffect(() => {
	// 	// howMushClicks(); вызовет бесконечное увеличение countClick
	// 	setTitle(`
	// 			Всего нажали на кнопки счетчика ${countClick}
	// 			${declension(countClick, 'раз', 'раза', 'раз')}
	// 		`);
	// }, [countClick]);

	return {counter, increment, decrement, clear, clearClicks};
}

const Counter2 = () => {
	// const [counter, setCounter] = useState(7);
	// const [countClick, setCountClick] = useState(0);
	const [title, setTitle] = useState('');

	const {counter, increment, decrement, clear, clearClicks} = useCounter(0, 0);

	// function howMushClicks() {
	// 	setCountClick(countClick + 1);
	// }

	// function increment() {
	// 	setCounter(counter + 1);
	// 	howMushClicks();
	// }

	// const decrement = () => {
	// 	setCounter(counter - 1);
	// 	howMushClicks();
	// }

	// function clear() {
	// 	setCounter(0);
	// 	howMushClicks();
	// }

	// function clearClicks() {
	// 	setCountClick(0);
	// }

	return (
		<React.Fragment>
			{/*<div className="counter__header">*/}
			{/*	<h3 className="heading">{title}</h3>*/}
			{/*	<Button*/}
			{/*		btnClass="counter__header-btn btn--secondary btn--xs"*/}
			{/*		onClick={clearClicks}*/}
			{/*	>*/}
			{/*		Очистить счетчик кликов*/}
			{/*	</Button>*/}
			{/*</div>*/}
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
		</React.Fragment>
	);
};

export default Counter2;