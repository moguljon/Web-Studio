import React from 'react';
import './Sidebar.scss';

const Sidebar = () => {
  return(
    <section className='section-sidebar'>
      <nav className='sidebar'>
        <ul className='list'>
          <li className='item'><a className='link' href='https://www.instagram.com/moguljon/' target='_blank' rel="noopener noreferrer"><i class="fab fa-instagram"></i></a></li>
          <li className='item'><a className='link' href='http://www.linkedin.com/in/jonathan-aguilar-047130ba' target='_blank' rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a></li>
          <li className='item'><a className='link' href='https://github.com/moguljon' target='_blank' rel='noopener noreferrer' ><i class="fab fa-github"></i></a></li>
        </ul>
      </nav>
    </section>
  )
}

export default Sidebar;