import React from 'react'
import './Offre.css'
import best from '../Assets/P7.webp'

const Offre = () => {
  return (
    <div className='offres'>
      <div className="offres-left">
        <h1>Exclusive</h1>
        <h1>Offres pour vous</h1>
        <p>Uniquement sur les produits les plus vendus</p>
        <button>vérifier maintenant</button>
      </div>
      <div className="offres-right">
        <img src={best} alt="" />
      </div>
    </div>
  )
}

export default Offre
