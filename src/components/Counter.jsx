import React, {useEffect, useState} from 'react';
import Button from "./ui/button/Button";
import declension from "../functions/declension";

const Counter = function () {
	/*
		useState хук состояния
		хранит внутр сост компонента между рендерами,
		возвр масссив из двух эл: текущ сост и ф-я для обнов этого сост-я
		Для извлечния этих эл юзаем деструктуризацию
		[сост-е, ф-я] = useSate(необязат аргумент: начальное сост-е д 1 рендера комп, может принимать значе-е или ф-ю)
	*/

	/*
		useEffect хук для сайд эффектов
		хапросы данных с сервера, таймеры, интервалы, инициализац подписок
		вызывается после каждого завершенного рендера, если не передано др агрументов
		useEffect(() => {}, [props/state, изменения которых надо отслеживать и запускать useEffect заново])
		useEffect(() => {}, []) - такая запись запускает ф-ю тока на первый рендер
		// componentDidMount, componentDidUpdate, componentWillUnmount
	*/
	const [counter, setCounter] = useState(7);

	const [countClick, setCountClick] = useState(0);
	const [title, setTitle] = useState('');

	// useEffect(() => {
	// 	console.log(`Всего нажали на кнопки счетчика ${countClick} раз`);
	// }, [countClick]);

	useEffect(() => {
		// howMushClicks(); вызовет бесконечное увеличение countClick
		setTitle(`
			Всего нажали на кнопки счетчика ${countClick} ${declension(countClick, 'раз', 'раза', 'раз')}
		`);
	}, [countClick]);

	function howMushClicks() {
		setCountClick(countClick + 1);
	}

	function increment() {
		setCounter(counter + 1);
		howMushClicks();
	}

	const decrement = () => {
		setCounter(counter - 1);
		howMushClicks();
	}

	function clear() {
		setCounter(0);
		howMushClicks();
	}

	function clearClicks() {
		setCountClick(0);
	}

	return (
		<React.Fragment>
			<div className="counter__header">
				<h3 className="heading">{title}</h3>
				<Button
					btnClass="counter__header-btn btn--secondary btn--xs"
					onClick={clearClicks}
				>
					Очистить счетчик кликов
				</Button>
			</div>
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
}

export default Counter;