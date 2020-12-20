import React from 'react';
import './SearchField.scss';
import { BsSearch } from "react-icons/bs";


const SearchField = ({ onSearchChange }) => {
  return(
    <section className='section-searchfield tc'>
      <input 
        onChange={onSearchChange}
        className='section-searchfield__input' 
        type='text' 
        placeholder='search title..'/><BsSearch size={20} style={{marginLeft: '-3rem'}} className='icon-input' />
    </section>
  )
}

export default SearchField;