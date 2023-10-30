import React from 'react';
import Button2 from "./Button2";
import curry from "../../../functions/currying";
import {arrSortBubble, arrSortSelection} from "../../../functions/arr-methods";
import Counter2 from "./Counter2";

const Section2 = () => {
	function bn(l: string | number, r: string | number) {
		return `(${l})(${r})`;
	}

	let curriedBn = curry(bn);

	let arrToSort: number[] = [
		10, 9, 8, 2, 6, 5, 4, 3, 7, 1
	];

	console.log('arrToSort', arrToSort);

	console.log('arrSortBubble result', arrSortBubble([...arrToSort]));
	console.log('arrSortSelection result', arrSortSelection([...arrToSort]));

	return (
		<React.Fragment>
			<h3 className="heading">
				Каррирование
			</h3>
			<div>
				{curriedBn(' . ')(' . ')}
			</div>
			<Button2
				btnText="Btn from tsx"
				btnClass="btn btn--primary"
			/>

			<Counter2 />
		</React.Fragment>
	);
};

export default Section2;