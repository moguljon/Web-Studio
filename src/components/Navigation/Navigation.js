import React, { Component } from 'react';
import './Navigation.scss';
import { Link, NavLink } from 'react-router-dom';
import ws from './img/W-S-logo.png';

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
              <a className='navigation__link' href='/blog'>Blog</a>
            </li>
            <li className='navigation__item'>
              <a className='navigation__link' href='/prices'>Pricing</a>
            </li>
            <li className='navigation__item'>
              <a className='navigation__link' href='/booking'>Booking</a>
            </li> 
          </ul>
        </nav>

        <div className='header__logo-box'>
          <Link to='/' className='mobile-logo'>
            <img src={ws} alt='alt' className='header__logo'/>
          </Link>
       </div> 
      <nav className='nav'>
      <div className='header__logo-box'>
      </div>
        <div className='nav__list'>
          <div className='nav__item'>
            <NavLink activeClassName='active' to='/portfolio' className='nav__link dark'>Portfolio</NavLink>
          </div>
          <div className='nav__item'>
            <NavLink to='/blog' activeClassName='active' className='nav__link dark'>Blog</NavLink>
          </div>
          <div className='nav__item'>
            <NavLink to='/booking' activeClassName='active' className='nav__link dark'>Booking</NavLink>
          </div>
          <div className='nav__item home'>
            <NavLink to='/prices' activeClassName='active' className='nav__link dark'>Pricing</NavLink>
         </div>      
        </div>
      </nav>
      </section>
    )
  }
  
}

export default Navigation;