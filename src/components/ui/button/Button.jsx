import React from 'react';

const Button = ({children, btnClass, ...props}) => {

	return (
		<button
			{...props}
			className={'btn' + (btnClass ? ' ' + btnClass : '')}
		>
			{children}
		</button>
	);
};

export default Button;