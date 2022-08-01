import React from 'react';

const SearchBox = ({ searchChange }) => {
	return (
		<div> 
			<input 
				className="pa2"
				type="search" 
				placeholder="search robots" 
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;