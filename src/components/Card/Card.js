import React from 'react';
import './Card.scss';

const Card = ({ id, title, paragraph, img, link}) => {
  return(
    <div className='section-blog__other'>
        <div>
          <article className='section-blog__card'>
            <img src={img} alt='' className='section-blog__image' />
            <h3 className='section-blog__header--three'>{title}</h3>
            <p className='section-blog__paragraph'>{paragraph}</p>
            <a className='btn' href={link} target='_blank' rel="noopener noreferrer">Read More</a>
            
          </article>
      </div>
    </div>
  )
}

export default Card;