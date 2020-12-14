import React from 'react';
import Card from '../Card/Card'
import './HeaderBlog.scss';

const Blog = () => {
  return(
    <section className='section-HeaderBlog'>
      <div className='u-center-text'>
        <h2 className='heading-secondary'>Feature Blog</h2>
      </div>
      <Card />
    </section>
  )
}

export default Blog;
