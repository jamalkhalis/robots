import React from 'react';

const Scroll = (props) => {
	return (
		<div className="mt3" style={{height: "600px", border: "1px solid black", overflowY: "scroll"}}> 
			{props.children}
		</div>
	)
}

export default Scroll;