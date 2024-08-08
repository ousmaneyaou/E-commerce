import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='news-letter'>
      <h1>Recevez des offres exclusives sur votre email</h1>
      <p>Abonnez-vous à notre lettre d'information et restez informé</p>
      <div>
        <input type="email" placeholder='your email id' />
        <button>Souscrire </button>
      </div>
    </div>
  )
}

export default NewsLetter
