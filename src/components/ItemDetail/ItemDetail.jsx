import React from 'react'
import ItemCountLogic from '../ItemCount/ItemCountLogic';
import { Link } from 'react-router-dom'

const ItemDetail = ({ products }) => {
  return (
    <>
      <Link to={'/category'}><button className='countBtn'>Volver</button></Link>
      <section className="itemContainer">
        <article className="product-grid">
          <div className="product-image">
            <img src={`${products.image}`} alt={products.title} />
          </div>
          <div className="product-content">
            <h3 className="title">{products.title}</h3>
          </div>
        </article>
        <article className='product-description'>
          <p>{products.description}</p>
          <p className="price">${products.price}</p>
          <div>
            <ItemCountLogic initial={1} stock={products.stock} products={products}/>
          </div>
        </article>
      </section>
    </>
  )
}

export default ItemDetail