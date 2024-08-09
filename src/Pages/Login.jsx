import React from 'react'
import '../Pages/CSS/Login.css'

const Login = () => {
  return (
    <div className='login'>
      <div className="loginsignup-container">
        <h1>S'inscrire</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Votre nom' />
          <input type="email" placeholder='Adress email' />
          <input type="password"placeholder='Mot de pass' />
        </div>
        <button>Continuer</button>
        <div className="loginsignup-login">
          vous avez déjà un compte ? <samp>Se connecter ici</samp>
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id='' />
            <p>En continuant, j'accepte les conditions d'utilisation et la politique de confidentialité.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
