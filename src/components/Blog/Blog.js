import React, { Component } from 'react';
import './Blog.scss';
// import { Link } from 'react-router-dom';
import team from './img/remote-team.png';
import {Helmet} from "react-helmet"; 
import CardList from '../CardList/CardList';
import { searching } from '../searching/searching';
import Searhfield from '../SearchField/SearchField';
// import ws from './img/W-S-logo.png';

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
         <title>Blog | Web Studios</title>
         <meta name="description" content='Our dedicated blog gives you an insight look on the people behind Web Studios.' />
      </Helmet>
        {/* <div className='header__logo-box'>
          <Link to='/' className='mobile-logo'>
            <img src={ws} alt='team webstudios' className='header__logo'/>
          </Link>
        </div>  */}

          <div className='row'>
              <div className='col-1-of-2'>
                <img src={team} alt='blog' className='team' /> 
              </div>
              <div className='col-1-of-2 border'>
                  <h1 className='content__header-one'>Web Studios Blog</h1>
                  <p className='section-blog__paragraph blog-paragraph'>We like to give technical insights and disucss our journey as technologist and developer. 
                    Find the latest blogs and informative <strong>information in tech</strong>. Web Studios is an interactive 
                      platform that makes your online presence viable while also <strong>educating you in the process</strong>. 
    
                  </p>
                  <a href='https://newsletter.webstudios.io/' target='_blank' rel="noopener noreferrer" className='btn btn--main tc resource-btn'>Newsletter</a>
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