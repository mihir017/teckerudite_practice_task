import React, { useContext} from 'react'
import { logo } from '../assets'
import { FooterContext } from './footerContext'

const Footer = () => {

    const footerData = useContext(FooterContext);

  return (
      <div className='footer-box'>
          <div className='footer-one d-flex justify-space-between'>
              <div className='footer-tag-line'>
                  <h4 className='tag'>Tagline will go here. Lorem ipsum doler sit amet…</h4>
                  <p className='app-site-link'>{footerData?.inquiry_mail}</p>
              </div>
              <hr />
              <div className='contact-details d-flex justify-space-between'>
                  <div className='address'>
                      <h5>Address</h5>
                      <p className='address-text'>{footerData.address}</p>
                  </div>
                  <div className='contact'>
                      <h5>Contact</h5>
                      <p>{footerData?.contact_mail}</p>
                      <p>{footerData?.contact_no}</p>
                  </div>
              </div>
          </div>
          <div className='footer-two d-flex align-center justify-space-between'>
                <div className='logo-img'>
                <img src={logo} className="img" alt="logo_image" />
              </div>
              <ul className='d-flex align-center'>
                  <li><a href="#about">About</a></li>
                  <li><a href="#blogs">Blogs</a></li>
                  <li><a href="#contact">Contact</a></li>
                  <li><a href="#services">Services</a></li>
              </ul>
              <p className='copy-right-msg'>￼© 2022. All rights reserved</p>
          </div>
    </div>
  )
}

export default Footer