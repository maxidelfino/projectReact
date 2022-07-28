import React from 'react'
import ItemCount from './ItemCount';

const ItemDetail = ({ products }) => {
  return (
    <>
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
              <ItemCount initial={1} stock={10}/>
              <p>Stock: 10</p>
            </article>
        </section>
    </>
  )
}

export default ItemDetail