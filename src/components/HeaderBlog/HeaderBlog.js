import React from 'react';
import CardList from '../CardList/CardList';
import './HeaderBlog.scss';

const Blog = () => {
  return(
    <section className='section-HeaderBlog'>
      <div className='u-center-text'>
        <h2 className='heading-secondary'>Feature Blog</h2>
      </div>
      <CardList />
    </section>
  )
}

export default Blog;
