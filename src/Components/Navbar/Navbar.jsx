import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.jpg'
import icon from '../Assets/panier.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
    //pour faire defiler le trait au clique
    const [menu, setMenu] = useState("shop")


  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>ACHETEUR</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => {setMenu("shop")}}> <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link> {menu === "shop" ? <hr/> : <></>}</li>
        <li onClick={() => {setMenu("ordinateurs")}}><Link style={{ textDecoration: 'none' }} to='/ordinateurs'>Ordinateur</Link> {menu === "ordinateurs" ? <hr/> : <></>}</li>
        <li onClick={() => {setMenu("telephones")}}><Link style={{ textDecoration: 'none' }} to='/telephones'>Telephone</Link>{menu === "telephones" ? <hr/> : <></>}</li>
        <li onClick={() => {setMenu("tablettes")}}><Link style={{ textDecoration: 'none' }} to='/tablettes'>Tablette</Link>{menu === "tablettes" ? <hr/> : <></>}</li>
        <li onClick={() => {setMenu("montres")}}><Link style={{ textDecoration: 'none' }} to='/montres'>Montre</Link>{menu === "montres" ? <hr/> : <></>}</li>
        <li onClick={() => {setMenu("ecouteurs")}}><Link style={{ textDecoration: 'none' }} to='/ecouteurs'>Ecouteur</Link>{menu === "ecouteurs" ? <hr/> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='login'><button>Connexion</button></Link>
        <Link to='cart'><img src={icon} alt="" /></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
