import React from 'react';

const SearchField = ( { onSearchChange }) => {
  return(
    <section className='section-searchfield tc'>
      <input 
        onChange={onSearchChange}
        className='pa3 ba b--blue bg-lightest-blue' 
        type='text' 
        placeholder='search..'/>
    </section>
  )
}

export default SearchField;