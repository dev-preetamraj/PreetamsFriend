import React from 'react'
function SearchBox({searchfield, searchChange}){
	return(
		<div className='pa2'>
			<input className='pa3 ba b--green bg-lightest-blue' type='text' onChange={searchChange} placeholder='Search Friend'/>
		</div>
		)
};
export default SearchBox;