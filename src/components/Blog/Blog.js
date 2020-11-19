import React, { Component } from 'react';
import './Blog.scss';
// import { Link } from 'react-router-dom';
import resources from './img/resized.jpeg';
import {Helmet} from "react-helmet"; 
// import logo from './img/logo.png';
import Newsletter from '../Newsletter/Newsletter';
import SearchField from '../SearchField/SearchField';
import CardList from '../CardList/CardList';

class Blog extends Component {
  render() {
    return(
    <div className='whole-section'>
      <section className='section-blog'>
      <Helmet>
         <title>Blog - Web Studios</title>
         <meta name="description" content='Welcome to our amazing blog. Here you will find rants, opinions and input on tech. Furtheremore, we have amazing guest writers. Join us as we will be transitioning to YouTube.' />
      </Helmet>
      {/* <div className='header__logo-box'>
        <Link to='/'>
          <img src={logo} alt='alt' className='header__logo'/>
        </Link>
      </div> */}
        <div className='row border'>
          <div className='col-1-of-2'>
            <img src={resources} alt='blog' /> 
          </div>
          <div className='col-1-of-2 border-around'>
            <h1 className='section-blog__header--one'>Welcome to web studios blog</h1>
            <p className='section-blog__paragraph'>Here you will find the latest input, takes, and rants as it relates to web development. Please contact me if you have any questions. Web studis is an interactive platform that makes your online presence viable while also educating you in this space. </p>
            <p className='section-blog__paragraph'>Here we also give you an insight on our platform and how were are able to leverage technology to your benefit. That is, how we can create an application for you that you would love but also that will bring profit.</p>  
          </div>
        </div>

       <Newsletter />
        <div className='section-work__box section-blog__box'>
          <h1 className='heading-secondary section-work__header section-blog__header--one'>Latest Blogs</h1>
        </div>
        </section>
        <SearchField/>
        <CardList />
      </div>
    )
  }
}

export default Blog;