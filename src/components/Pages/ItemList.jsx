import React from 'react';
import Item from '../Pages/Item'

const ItemList = ({ products }) => {
    return (
        <>
            <ul className='itemContainer'>
                {
                    products.length > 0 ?
                        products.map(item => (
                            <Item
                                key={item.id}
                                name={item.title}
                                price={item.price}
                                image={item.image}
                            />
                        )) :
                        <p>Cargando...</p>
                }
            </ul>
        </>
        // <div className='itemContainer'>
        //     {product.map((item, id) => {
        //         return (
        //             <section key={id} >
        //                 <article>
        //                     <div>
        //                         <h1>{item.title}</h1>
        //                         <p>{item.price}</p>
        //                     </div>
        //                     <div>
        //                         <img src={`${item.image}`} alt={`${item.title}`} />
        //                     </div>
        //                 </article>
        //                 <hr/>
        //             </section>
        //         )
        //     })}
        // </div>
    )
}

export default ItemList