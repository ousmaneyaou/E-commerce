import React, { useContext } from 'react'
import './AffichageProduct.css'
import { ShopContext } from '../../Context/ShopContext'
// import staricon from '../Assets/starvide.webp'
// import stardullicon from '../Assets/startdullicon.png'

const AffichageProduct = ({product}) => {
    const {addToCart} = useContext(ShopContext)
    // const {removeFromCart} = useContext(ShopContext)
  return (
    <div className='affichageProduct'>
      <div className="affichageProduct-left">
        <div className="affichageProduct-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="affichageProduct-image">
            <img className='affichageProduct-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="affichageProduct-rigth">
        <h1>{product.name}</h1>
        {/* <div className="affichageProduct-rigth-star">
            <img src={stardullicon} alt="" />
            <img src={stardullicon} alt="" />
            <img src={stardullicon} alt="" />
            <img src={stardullicon} alt="" />
            <img src={staricon} alt="" />
        </div> */}
        <div className="affichageProduct-rigth-prix">
            <div className='prix'>
            <div className="affichageProduct-rigth-prix-old">
                ${product.oldPrice}
            </div>
            <div className="affichageProduct-rigth-prix-new">
                ${product.newPrice}
            </div>
            </div>
           
            <div className="affichageProduct-rigth-description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores fugit totam et corrupti aspernatur ea, consequuntur eius incidunt voluptates recusandae.
            </div>
            <div className="affichageProduct-rigth-size">
                <h1>Selection la marque</h1>
                <div className="affichageProduct-rigth-size">
                    <div>moins chers</div>
                    <div>pas chers</div>
                    <div>Moyem</div>
                    <div>Trop chers</div>
                    <div>Tres chers</div>
                </div>
            </div>
            <button onClick={() => {addToCart(product.id)}}>Ajouter au panier</button>
            <p className='affichageProduct-rigth-category'><span>Categorie : </span>{product.category}</p>
            <p className='affichageProduct-rigth-category'><span>tags  : </span>Top, modele</p>
        </div>
      </div>
    </div>
  )
}

export default AffichageProduct
