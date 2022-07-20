import React from 'react';
import product from '../../data/products.json';

const ItemList = (props) => {
    return (
        // {
        //     props.map = (article) => {
        //         <Item product={article}/>
        //     }
        // }

        <div className='itemContainer'>
            {product.map((item, id) => {
                return (
                    <section key={id} >
                        <article className={`item ${item.cName}`}>
                            <div>
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                            </div>
                            <div>
                                <p>{item.priceMes}</p>
                            </div>
                        </article>
                    </section>
                )
            })}
        </div>
    )
}

export default ItemList