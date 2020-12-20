import React from 'react';
import Card from '../Card/Card';

const CardList = ({ searching }) => {
  return(
    <div className='grid-columns'>
      {
        searching.map((search, i) => {
          return <Card
            key={i} 
            id={searching[i].id} 
            title={searching[i].title} 
            img={searching[i].img} 
            paragraph={searching[i].paragraph} 
            link={searching[i].link}  />
        })
      }
    </div>
  )
}
export default CardList;