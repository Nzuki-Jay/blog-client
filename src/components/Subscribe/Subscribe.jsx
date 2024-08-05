import React from 'react';
import './Subscribe.scss';

const Subscribe = () => {
  return (
    <div className='subscribe'>
        <h5>Subscribe</h5>
        <p>
          Subscribe to our newsletter. We deliver the best articles to your inbox.
        </p>
        <div>
          <input placeholder='Enter Email Address' type='text'/>
          <button>
              Subscribe
          </button>
        </div>
    </div>
  )
}

export default Subscribe
