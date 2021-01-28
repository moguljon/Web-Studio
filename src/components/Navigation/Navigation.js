import React, { Component } from 'react';
import './Navigation.scss';
import { Link, NavLink } from 'react-router-dom';
import ws from './img/W-S-logo.png';
import Social from '../Social/Social';

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
              <a className='navigation__link' href='/resources'>Resources</a>
            </li>
            <li className='navigation__item'>
              <a className='navigation__link' href='/prices'>Pricing</a>
            </li>
            <li className='navigation__item'>
              <a className='navigation__link' href='/booking'>Booking</a>
            </li>  
            <li className='navigation__item'>
              <a className='navigation__link ' href='https://webstudiosnews.herokuapp.com/'  target='_blank' rel="noopener noreferrer">Newsletter</a>
            </li>  
          <Social />
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
          <div className='nav__item home'>
            <NavLink to='/resources' activeClassName='active' className='nav__link dark'>Resources</NavLink>
         </div>
          <div className='nav__item'>
            <a href='https://webstudiosnews.herokuapp.com/'className='nav__link dark new-newsletter newsletter-link' target='_blank' rel="noopener noreferrer">Newsletter</a>
          </div>         
        </div>
      </nav>
      </section>
    )
  }
  
}

export default Navigation;