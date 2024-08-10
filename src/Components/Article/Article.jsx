import React from 'react'
import './Article.css'
import { Link } from 'react-router-dom'

const Article = (props) => {
  return (
    <div className='article'>
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt="" />
      </Link>
      <p>{props.name}</p>
      <div className="prix-article">
        <div className="aticle-new-prix">
            {props.newPrice}
        </div>
        <div className="article-all-prix">
            {props.oldPrice}
        </div>
      </div>
    </div>
  )
}

export default Article
