import React from 'react';

const Button = ({ updateValue, title, btnText, btnClass, ...props }) => {
	const clickHandler = (event) => {
		updateValue(3);
	}

	return (
		<button
			title={title}
			{...props}
			className={btnClass}
			onClick={clickHandler}
		>{btnText}</button>
	);
};

export default Button;
