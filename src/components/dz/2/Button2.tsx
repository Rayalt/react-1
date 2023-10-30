import React from 'react';

export interface ButtonInterface {
	title?: string,
	btnText: any,
	btnClass?: string,
	props?: string[],
}

const Button2 = ({
	title,
	btnText,
	btnClass,
	...props
}: ButtonInterface) => {

	function val(value: any) {
		console.log(value);
	}

	val(1); // todo: noImplicitAny не работает если явно указать any

	function val2(value: number) {
		return value * 3;
	}

	val2(2);
	// при "strictNullChecks": true не сработает вызов ниже
	// val2(null);
	// val2(undefined);

	return (
		<button
			title={title}
			{...props}
			className={btnClass}
		>{btnText}</button>
	);
};

export default Button2;