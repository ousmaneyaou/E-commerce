import React from 'react'
import './Footer.css'
import footerLogo from '../Assets/logo.jpg'
import insta from '../Assets/insta.jpg'
import facebook from '../Assets/facebook.png'
import what from '../Assets/whasapp.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footerLogo} alt="" />
        <p>BOUTIQUE</p>
      </div>
      <ul className='footer-link'>
        <li>Entreprise</li>
        <li>Produits</li>
        <li>Bureaux</li>
        <li>A propos</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={insta} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={facebook} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={what} alt="" />
        </div>
      </div>
      <div className="footer-copy">
        <hr />
        <p>copyrigth @ 2024  - Tous droits réservés.</p>
      </div>
    </div>
  )
}

export default Footer
