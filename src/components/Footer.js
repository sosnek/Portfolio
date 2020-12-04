import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';
import { Button } from './Button';

function Footer() {
    return (
      <div className='footer-container'>
        <section className='footer-subscription'>
          <p className='footer-subscription-heading'>
            Please give me a job
          </p>
          <div className='input-areas'>
          </div>
        </section>
        <section class='social-media'>
          <div class='social-media-wrap'>
            <div class='footer-logo'>
              <Link to='/' className='social-logo'>
                Adam 
                <i class='fas fa-code' />
              </Link>
            </div>
            <small class='website-rights'>Adam Sosnowski © 2020</small>
          </div>
        </section>
      </div>
    );
  }

export default Footer;
