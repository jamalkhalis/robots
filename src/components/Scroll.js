import React from 'react';

const Scroll = (props) => {
	return (
		<div className="scroll" style={{overflowY: "scroll", width: "100%"}}> 
			{props.children}
		</div>
	)
}

export default Scroll;