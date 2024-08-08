import React from 'react'
import './Article.css'

const Article = (props) => {
  return (
    <div className='article'>
      <img src={props.image} alt="" />
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
