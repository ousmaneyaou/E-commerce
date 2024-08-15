import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext';
import removeicon from '../Assets/removeicon.png'

const CartItems = () => {

    const {allProduct, cartItems, removeFromCart, getTotalCartAmount} = useContext(ShopContext)

  return (
    <div className='cartItems'>
      <div className="cartitemc-format-main">
        <p>Product</p>
        <p>Titre</p>
        <p>Prix</p>
        <p>Qantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {allProduct.map((e) => {
        if(cartItems[e.id] > 0)
        {
            return <div>
            <div className="cartitems-format">
                <img src={e.image} alt="" className='cartitems-product-icon'/>
                <p>{e.name}</p>
                <p>{e.newPrice}</p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                <p>{e.newPrice*cartItems[e.id]}</p>
                <img src={removeicon} alt="" onClick={() => {removeFromCart(e.id)}}/>
            </div>
            <hr />
          </div>
        }
        return null;
      })}
      <div className="cartitems down">
        <div className="cartitems-tatal">
            <h1>Totals du panier</h1>
            <div>
                <div className="cartitems-total-item">
                    <p>Sous-total</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className='cartitems-total-item'>
                    <p>Expédition</p>
                    <p>Gratuite</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button>Passer à la caisse</button>
        </div>
        <div className="cartitems-promocode">
            <p>Si vous avez un code promo, indiquez-le ici</p>
            <div className="cartitems-promobox">
                <input type="text" placeholder='code promo'/>
                <button>Soumettre</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems
