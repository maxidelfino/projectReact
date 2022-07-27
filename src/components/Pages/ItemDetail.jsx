import React from 'react'
import ItemCount from '../Pages/ItemCount';

const ItemDetail = ({ products }) => {
  return (
    <>
      <section>
        <article>
          <div>
            <h1>{products.title}</h1>
            <p>{products.price}</p>
          </div>
          <div>
            <img src={products.image} alt={products.title} />
          </div>
        </article>
      </section>
      <ItemCount initial={1} stock={10}/>
    </>
  )
}

export default ItemDetail