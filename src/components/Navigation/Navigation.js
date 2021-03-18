import React, { Component } from 'react';
import './Navigation.scss';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';

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
              <a className='navigation__link' href='/portfolio'>Portfolio</a>
            </li>
            <li className='navigation__item'>
              <a className='navigation__link' href='https://publication.webstudios.io/'>Publication</a>
            </li>
            <li className='navigation__item'>
              <a className='navigation__link' href='/resources'>Resources</a>
            </li>
            <li className='navigation__item'>
              <a className='navigation__link' href='/services'>Services</a>
            </li>
            <li className='navigation__item'>
              <a className='navigation__link' href='/booking'>Booking</a>
            </li> 
          </ul>
        </nav>
        <Logo />
      <nav className='nav'>
      <div className='header__logo-box'>
      </div>
        <div className='nav__list'>
          <div className='nav__item'>
            <NavLink activeClassName='active' to='/portfolio' className='nav__link dark'>Portfolio</NavLink>
          </div>
          <div className='nav__item'>
            <a href='https://publication.webstudios.io/' className='nav__link dark'>Publication</a>
          </div>
          <div className='nav__item'>
            <NavLink to='/resources' activeClassName='active' className='nav__link dark'>Resources</NavLink>
          </div>
          <div className='nav__item home'>
            <NavLink to='/services' activeClassName='active' className='nav__link dark'>Services</NavLink>
          </div>      
          <div className='nav__item'>
            <NavLink to='/booking' activeClassName='active' className='nav__link dark'>Booking</NavLink>
          </div> 
        </div>
      </nav>
      </section>
    )
  }
  
}

export default Navigation;