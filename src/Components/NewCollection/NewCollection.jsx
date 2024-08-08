import React from 'react'
import './NewCollection.css'
import allProduct from '../Assets/data'
import Article from '../Article/Article'

const NewCollection = () => {

    const computerProducts = allProduct.filter(product => product.category === "NewCollection");

  return (
    <div className='New-collection'>
      <h1>NOUVELLES COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {computerProducts.map((article, i) => {
            return <Article  key={i} id={article.id} name={article.name} image={article.image}
            newPrice={article.newPrice} oldPrice={article.oldPrice}/>
        })}
      </div>
    </div>
  )
}

export default NewCollection
