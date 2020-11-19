import React, { Component } from 'react';
import './Navigation.scss';

import { Link } from 'react-router-dom';

import logo from './img/logo.png';
class Navigation extends Component {


  render() {
    return(
      <section className='navigaiton'>
        
        <input type='checkbox' className='navigation__checkbox' id='navi-toggle'></input>
  
        <label htmlFor='navi-toggle' className='navigation__button'>
          <span className='navigation__icon'>
            &nbsp;
          </span>
        </label>

  
        <div className='navigation__background'>&nbsp;</div>
        <nav className='navigation__nav'>
          <ul className='navigation__list'>
            <li className='navigation__item'>
              <a href='/' className='navigation__link'><span>01</span> Home</a>
            </li> 
            <li className='navigation__item'>
              <a href='/Work' className='navigation__link'><span>02</span> Projects</a>
            </li>
            <li className='navigation__item'>
              <a href='/Blog' className='navigation__link'><span>03</span> Blog</a>
            </li>
            <li className='navigation__item'>
              <a href='/Booking' className='navigation__link'><span>02</span> Booking</a>
            </li>           
          </ul>
        </nav>

        
      <nav className='nav'>
        
      <div className='header__logo-box'>
        <Link to='/'>
          <img src={logo} alt='alt' className='header__logo'/>
        </Link>
      </div>
        <ul className='nav__list'>
          <li className='nav__item'>
            <Link to='/' className='nav__link dark'> Home</Link>
          </li>
          <li className='nav__item'>
            <Link to='/work' className='nav__link dark'> Projects</Link>
          </li>
          <li className='nav__item'>
            <Link to='/blog' className='nav__link dark'>Blog</Link>
          </li>
          <li className='nav__item'>
            <Link to='/booking' className='nav__link dark'> Booking</Link>
          </li>
        </ul>
      </nav>
     

      </section>
    )
  }
  
}

export default Navigation;