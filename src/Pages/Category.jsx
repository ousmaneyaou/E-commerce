import React, { useContext } from 'react'
import '../Pages/CSS/Category.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown from '../Components/Assets/dropdown.png'
import Article from '../Components/Article/Article'

const Category = (props) => {

  const {allProduct} = useContext(ShopContext);

  return (
    <div className='cateory'>
      <img className='category-banner' src={props.banner} alt="" />
      <div className="category-indexsort">
        <p>
          <span>showing 1-12</span> sur 42 produits
        </p>
        <div className="shopcategory-sort">
            trier par <img src={dropdown} alt="" />
        </div>
      </div>
      <div className="category-product">
        {allProduct.map((article, i) => {
          if (props.category === article.category) {
            return <Article key={i} id={article.id} name={article.name} image={article.image}
            newPrice={article.newPrice} oldPrice={article.oldPrice}/>
          }
          else{
            return null
          }
        })}
      </div>
      <div className="category-laodmore">En savoir plus</div>
    </div>
  )
}

export default Category
