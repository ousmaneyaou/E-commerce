import React from 'react'
import './Popular.css'
import allProduct from '../Assets/data'
import Article from '../Article/Article'

const Popular = () => {

    const computerProducts = allProduct.filter(product => product.category === "ordinateur");


  return (
    <div className='popular'>
      <h1>Ordinateur populaire</h1>
      <hr />
      <div className="popular-item">
        {computerProducts.map((article, i) => {
            return <Article  key={i} id={article.id} name={article.name} image={article.image}
            newPrice={article.newPrice} oldPrice={article.oldPrice}/>
        })}
      </div>

    </div>
  )
}

export default Popular
