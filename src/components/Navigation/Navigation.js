import React, { Component } from 'react';
import './Navigation.scss';
import { Link, NavLink } from 'react-router-dom';
import ws from './img/ws.png';

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
              {/* <Link to='/work' className='navigation__link'>Projects</Link> */}
            </li>
            <li className='navigation__item'>
              <a className='navigation__link' href='/blog'>Blog</a>
              {/* <Link to='/blog' className='navigation__link'>Blog</Link> */}
            </li>
            <li className='navigation__item'>
              <a className='navigation__link' href='/prices'>Pricing</a>
              {/* <Link to='/blog' className='navigation__link'>Blog</Link> */}
            </li>
            <li className='navigation__item'>
              <a className='navigation__link' href='/booking'>Booking</a>
              {/* <Link to='/booking' className='navigation__link'>Booking</Link> */}
            </li>  
          </ul>
        </nav>

        <div className='header__logo-box'>
          <Link to='/' className='mobile-logo'>
            <img src={ws} alt='alt' className='header__logo'/>
          </Link>
      </div> 
{/* 
        <Link to='/'>
        <div className='header__logo-box'>
          <div className='new-logo'>
            <p className='new-logo__brand'>W<span className='brand2'></span>&mdash;S</p>
          </div>
        </div>
      </Link> */}
        
      <nav className='nav'>
      <div className='header__logo-box'>
        {/* <Link to='/'>
        <div className='header__logo-box'>
          <div className='new-logo'>
            <p className='new-logo__brand'>W<span className='brand2'></span>&mdash;S</p>
          </div>
        </div>
      </Link> */}


      </div>
        <ul className='nav__list'>
          <li className='nav__item'>
            <NavLink activeClassName='active' to='/portfolio' className='nav__link dark'>Portfolio</NavLink>
          </li>
          <li className='nav__item'>
            <NavLink to='/blog' activeClassName='active' className='nav__link dark'>Blog</NavLink>
          </li>
          <li className='nav__item home'>
           <NavLink to='/prices' activeClassName='active' className='nav__link dark'>Pricing</NavLink>
         </li>
          <li className='nav__item'>
            <NavLink to='/booking' activeClassName='active' className='nav__link dark'>Booking</NavLink>
          </li>
        </ul>
      </nav>
      </section>
    )
  }
  
}

export default Navigation;