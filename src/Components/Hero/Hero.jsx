import React from 'react'
import './Hero.css'
import emoji from '../Assets/emojiok.png'
import arrow from '../Assets/next.png'
import menuIcon from '../Assets/MENU1.avif'



const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>Nouveaux arrivages uniquement</h2>
        <div>
            <div className='hand-hand-icon'>
                <p>Nouveau</p>
                <img src={emoji} alt="" />
            </div>
            <p>Collections</p>
            <p>Pour tous</p>
        </div>
        <div className='hero-latest-icon'>
            <div>Dernière collection</div>
            <img src={arrow} alt="" />
        </div>
      </div>
      
      <div className="hero-right">
      <img src={menuIcon} alt="" />
      </div>
    </div>
  )
}

export default Hero
