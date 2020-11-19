import React from 'react';
import { Link } from 'react-router-dom';
import udemy2 from './img/udemy.jpg';
import programming from './img/programming.jpg';
import './DifferentBlog.scss';

const DifferentBlog = () => {
  return(
    <section className='section-differentBlog'>
       <div className='center'>
        <h2 className='section-relatedBlog__header--two' style={{marginBottom: '6rem'}}>More From Web Studios</h2>
      </div>
      <div className='row'>
        <div className='col-1-of-2'>
          <article className='section-blog__card'>
              <Link to='/blog/courses'>
                <img src={udemy2} alt='mountains' className='section-blog__image' />
              </Link>
              <h3 className='section-blog__header--three'>Best Udemy Courses for Web Development </h3>
              <p className='section-blog__paragraph'> 
              Udemy is one of the best resources to learn web development and 
              has allowed mea..<Link to='/blog/courses'>Read more</Link>
              </p>
            </article>
        </div>
          <div className='col-1-of-2'>
            <article className='section-blog__card'>
              <Link to='/blog/journey'>
                <img src={programming} alt='mountains' className='section-blog__image' />
              </Link>
              <h3 className='section-blog__header--three'>Best Udemy Courses for Web Development </h3>
              <p className='section-blog__paragraph'> 
              Udemy is one of the best resources to learn web development and 
              has allowed mea..<Link to='/blog/courses'>Read more</Link>
              </p>
            </article>
          </div>
      </div>
    </section>
  )
}

export default DifferentBlog;