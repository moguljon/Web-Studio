import React from 'react';

const SearchField = ( { onInputChange }) => {
  return(
    <section className='section-searchfield center'>
      <input 
        onChange={onInputChange}
        className='pa3 ba b--blue bg-lightest-blue' 
        type='text' 
        placeholder='search..'/>
    </section>
  )
}

export default SearchField;