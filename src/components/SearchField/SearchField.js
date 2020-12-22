import React from 'react';
import './SearchField.scss';

const SearchField = ({ onSearchChange }) => {
  return(
    <section className='section-searchfield tc'>
      <input 
        onChange={onSearchChange}
        className='section-searchfield__input' 
        type='text' 
        placeholder='search title..'/>
    </section>
  )
}

export default SearchField;