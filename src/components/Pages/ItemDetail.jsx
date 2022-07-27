import React from 'react'
import ItemCount from './ItemCount';

const ItemDetail = ({ products }) => {
  return (
    <>
      <section className="itemContainer">
            <article className="product-grid">
                <div className="product-image">
                    <img src={`${products.image}`} alt={products.name} />
                </div>
                <div className="product-content">
                    <h3 className="title">{products.name}</h3>
                    <p className="price">${products.price}</p>
                    <ItemCount initial={1} stock={10}/>
                </div>
            </article>
        </section>
    </>
  )
}

export default ItemDetail