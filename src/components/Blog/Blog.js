import React, { Component } from 'react';
import './Blog.scss';
import { Link } from 'react-router-dom';
import team from './img/remote-team.png';
import {Helmet} from "react-helmet"; 
import logo from './img/logo_transparent.png';
import CardList from '../CardList/CardList';
import { searching } from '../searching/searching';
import Searhfield from '../SearchField/SearchField';

class Blog extends Component {
  constructor() {
    super();

    this.state = {
      searching: searching,
      searchField: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value});
  }

  render() {
    const { searching, searchField } = this.state;
    const filterBlogs = searching.filter(filterBlog => {
      return filterBlog.title.toLowerCase().includes(searchField.toLowerCase())
    });
    return(
    <div className='whole-section'>
      <section className='section-blog'>
      <Helmet>
         <title>Blog - Web Studios</title>
         <meta name="description" content='Welcome to our amazing blog. Here you will find rants, opinions and input on tech. Furtheremore, we have amazing guest writers. Join us as we will be transitioning to YouTube.' />
      </Helmet>
      <div className='header__logo-box'>
        <Link to='/'>
          <img src={logo} alt='alt' className='header__logo'/>
        </Link>
      </div>
        <div className='row border'>
          <div className='col-1-of-2'>
            <img src={team} alt='blog' /> 
          </div>
          <div className='col-1-of-2 border-around'>
            <h1 className='section-blog__header--one'>Web Studios Blog</h1>
            <p className='section-blog__paragraph'>Here you will find the latest input, takes, and rants as it relates to web development. Please contact me if you have any questions. Web studis is an interactive platform that makes your online presence viable while also educating you in this space. </p>
            <p className='section-blog__paragraph'>Here we also give you an insight on our platform and how were are able to leverage technology to your benefit. That is, how we can create an application for you that you would love but also that will bring profit.</p>  
          </div>
        </div>
        <div className='section-work__box section-blog__box'>
          <h1 className='heading-secondary section-work__header section-blog__header--one'>Latest Blogs</h1>
        </div>
        </section>
        <Searhfield onSearchChange={this.onSearchChange} />
        <CardList searching={filterBlogs} />
      </div>
    )
  }
}

export default Blog;