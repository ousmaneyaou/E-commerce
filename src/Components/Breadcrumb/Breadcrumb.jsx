import React from 'react'
import './Breadcrumb.css'
import arrowicons from '../Assets/arrow-icon.png'

const Breadcrumb = ({product}) => {
  return (
    <div className='breadcrumb'>
      HOME <img src={arrowicons} alt="" /> SHOP <img src={arrowicons} alt="" /> {product.category} <img src={arrowicons} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrumb
