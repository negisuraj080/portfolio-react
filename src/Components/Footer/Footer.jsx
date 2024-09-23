import React from 'react'
import './Footer.css'
import user from '../../assets/user.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <p className='footer-left-para'>Suraj</p>
          
        </div>
        
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
        © 2023 Suraj Negi. All rights reserved.
        </p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
