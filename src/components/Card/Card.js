import React from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';
import programming from './img/programming.jpg';
import journey from './img/blog-journey.jpg';
import { FaTags } from "react-icons/fa";
import udemy from './img/udemy.jpg';

import './Card.scss';

const Card = () => {
  return(
    <div className='section-blog__other'>
      <div className='row'>
      <div className='col-1-of-3'>
        <article className='section-blog__card'>
          <Link to='/blog/journey'>
            <img src={programming} alt='journey' className='section-blog__image' />
          </Link>
          <div className='section-blog__tag section-blog__tag--two'><FaTags /> Journey</div>
          <h3 className='section-blog__header--three'>Landing a Tech Interview in 9 months</h3>
          <p className='section-blog__paragraph'>
          I want to first say that I have a bachelors degree in Information systems, so in school you get to learn about Java as well..<Link to='/blog/journey'> Read more</Link>
          </p>
        </article>
      </div> 
      <div className='col-1-of-3'>
        <article className='section-blog__card'>
          <Link to='/blog/technologies'>
            <img src={journey} alt='technology' className='section-blog__image' />
          </Link>
          <div className='section-blog__tag section-blog__tag--three'><FaTags /> Technology</div>
          <h3 className='section-blog__header--three'>Amazing technologies right now</h3>
          <p className='section-blog__paragraph'>
          React was the first technology that I was able to appreciate as a beginner. This is because when I hit the stage of using ..<Link to='/blog/journey'> Read more</Link>
          </p>
        </article>
      </div> 
      <div className='col-1-of-3'>
        <article className='section-blog__card'>
        <Link to='/blog/courses'>
          <img src={udemy} alt='udemy' className='section-blog__image' />
        </Link>
          <div className='section-blog__tag section-blog__two--three'><FaTags /> Courses</div>
          <h3 className='section-blog__header--three'>Best Udemy Courses for Web Development</h3>
          <p className='section-blog__paragraph'>
          Udemy is one of the best rources to learn web development and has allowed me to level up my developer skilss 10 folds..<Link to='/blog/courses'> Read more</Link>
          </p>
        </article>
      </div>
    </div>
  </div>
  )
}

export default Card;