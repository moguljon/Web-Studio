import React from 'react';
import programming from './img/programming.jpg';
import journey from './img/blog-journey.jpg';
import './RelatedBlog.scss';
import { Link } from 'react-router-dom';

const RelatedBlog = () => {
  return(
    <section className='section-realatedBlog'>
      <div className='center'>
        <h2 className='section-relatedBlog__header--two'>More From Web Studios</h2>
      </div>
      <div className='row section-blog__other'>
          <div className='col-1-of-2'>
            <article className='section-blog__card'>
              <Link to='/blog/technologies'>
              <img src={journey} alt='skies' className='section-blog__image' />
              </Link>
              <h3 className='section-blog__header--three'>Amazing Technologies Right Now</h3>
              <p className='section-blog__paragraph'>React was the first technology that I was able to appreciate as a beginner....
                <Link to='/blog/technologies'>Read More</Link>
              </p>
             
            </article>
          </div>
          <div className='col-1-of-2'>
            <article className='section-blog__card'>
              <Link to='/blog/journey'>
                <img src={programming} alt='some' className='section-blog__image' />
              </Link>
              <h3 className='section-blog__header--three'>How I Studied and Landed My First Interview In 9 Months</h3>
              <p className='section-blog__paragraph'>I want to first say that I do have a bachelors degree in information systems...<Link to='/blog/journey'>Read more</Link>
              </p>
            </article>
          </div>
        </div>
    </section>
  )
}

export default RelatedBlog;