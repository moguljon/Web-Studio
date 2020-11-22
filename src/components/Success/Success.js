import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import './Success.scss';
import Particles from 'react-particles-js';

class Success extends Component {
  render() {
    return(
      <section className='section-success'>
        <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 80
	        },
	        "size": {
	            "value": 4
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
   
        <div className='section-success__card'>
          <h2 className='section-success__header--two'>Thank you!  </h2>
          <p className='section-success__paragraph'>Your form has been received</p>
          <Link to='/booking' className='section-success__text'>Back to booking &rarr; </Link>
        </div>
      </section>
    )
  }
}

export default Success;