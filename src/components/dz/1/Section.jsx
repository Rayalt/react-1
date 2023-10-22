import React, {useState} from 'react';
import Button from "./Button";

const Section = () => {
	const [value, setValue] = useState(0);

	const updateValue = () => {
		setValue(value + 1);
		console.log(value)
	}

	return (
		<div>
			<h3 className="heading">{value}</h3>

			<Button
				title="Вот это кнопка"
				type="button"
				btnClass="btn btn--primary"
				btnText="Кнопка"
				updateValue={updateValue}
			></Button>
		</div>
	);
};

export default Section;