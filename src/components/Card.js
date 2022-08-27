import React from 'react';

const Card = ({ id, name, email }) => {
	return (
		<div className="tc bg-gray-1 dib br3 br3 pa3 ma2 grow bw2 shdow-5 pointer">
			<img alt="this is husling" src={`https://robohash.org/${id}?size=200x200`} />
			<div>
				<h2> {name} </h2>
				<p> {email} </p>
			</div>
		</div>
	);
}

export default Card;