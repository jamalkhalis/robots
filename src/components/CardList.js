import React from 'react';
import Card from './Card'
const CardList = ({ robots }) => {
	// if (true) {
	// 	throw new Error("Throwing error from the CardList")
	// }
	return (
		<div className="tc">
			{ 
				robots.map((val, i) => {
					return (<Card key={i} id={val.id} name={val.name} email={val.email} />);
				})
			}
	    </div>
	);
}

export default CardList;