import React from 'react';
import { Link } from 'react-router-dom';
import udemy2 from './img/udemy.jpg';
import tech from './img/blog-journey.jpg';


const OtherRelated = () => {
  return(
    <section className='section-OtherRelated'>
      <div className='center'>
        <h2 className='section-relatedBlog__header--two'>More From Web Studios</h2>
      </div>
      <div className='row section-blog__other'>
          <div className='col-1-of-2'>
            <article className='section-blog__card'>
              <Link to='/blog/technologies'>
              <img src={tech} alt='tech' className='section-blog__image' />
              </Link>
              <h3 className='section-blog__header--three'>Amazing Technologies Right Now</h3>
              <p className='section-blog__paragraph'>React was the first technology that I was able to appreciate as a beginner....
                <Link to='/blog/technologies'>Read More</Link>
              </p>
            </article>
          </div>
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
        </div>
    </section>
  )
}

export default OtherRelated;