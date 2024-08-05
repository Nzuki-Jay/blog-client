import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='border'></div>
        <div className='footerContent'>
            <ul className='footerLinks'>   
                <li> Team</li>
                <li>About us </li>
                <li>Press</li>
            </ul>
            <ul className='footerLinks'>
                <li>Blog</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Documentation</li>
            </ul>
            
        </div>
    </div>
  )
}

export default Footer
