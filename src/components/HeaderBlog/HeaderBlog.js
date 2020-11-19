import React from 'react';
import programming from './img/programming.jpg';
import journey from './img/blog-journey.jpg';
import udemy from './img/udemy.jpg';

import { Link } from 'react-router-dom';
import './HeaderBlog.scss';

const Blog = () => {
  return(
    <section className='section-HeaderBlog'>
      <div className='u-center-text '>
        <h2 className='heading-secondary'>Feature Blog</h2>
      </div>

      <div className='row section-blog__other'>
          <div className='col-1-of-3'>
            <article className='section-blog__card'>
              <Link to='/blog/technologies'>
              <img src={programming} alt='skies' className='section-blog__image' />
              </Link>
              <h3 className='section-blog__header--three'>Amazing Technologies Right Now</h3>
              <p className='section-blog__paragraph'> 
              React was the first technology that I was able to appreciate as a beginner. 
              This is because when I hit the stage of using a front end framework 
              I combined everything that I learned into it. I was able to realized 
              that you can combine all these front technolgies with it and create beautiful 
              interfaces and being able to scale. Everything seemed to be connected.
                <Link to='/blog/technologies'>Read More</Link>
              </p>
             
            </article>
          </div>
          <div className='col-1-of-3'>
            <article className='section-blog__card'>
              <Link to='/blog/journey'>
                <img src={journey} alt='some' className='section-blog__image' />
              </Link>
              <h3 className='section-blog__header--three'>How I Studied and Landed My First Interview In 9 Months</h3>
              <p className='section-blog__paragraph'> 
              I want to 
              first say that I have a bachelors degree in Information systems, 
              so in school you get to learn about Java as well OOP 
              - Object-Oriented Programming. I also got to learn about HTML and CSS. 
              Also, systems design and databases. 
              All these technlogies needed to become a great software enginner..<Link to='/blog/journey'>Read more</Link>
              </p>
            </article>
          </div>
          <div className='col-1-of-3'>
            <article className='section-blog__card'>
              <Link to='/blog/journey'>
                <img src={udemy} alt='mountains' className='section-blog__image' />
              </Link>
              <h3 className='section-blog__header--three'>Best Udemy Courses for Web Development </h3>
              <p className='section-blog__paragraph'> 
              Udemy is one of the best resources to learn web development and 
              has allowed me to level up my developer skils 10 folds when I started using it. 
              Now let me say that I do not have hundreds of courses 
              that I have purchased ont here, I have about 11. 
              These courses are top rated however....<Link to='/blog/courses'>Read more</Link>
              </p>
            </article>
          </div>
        </div>

      <div className='u-center-text'>
        <Link to='/blog' className='btn btn--main'>Go To Our Blogs</Link>
      </div>
    </section>
  )
}

export default Blog;