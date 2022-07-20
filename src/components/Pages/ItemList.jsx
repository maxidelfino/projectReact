import React from 'react';
import product from '../../data/products.json';

const ItemList = (props) => {
    return (
        // {
        //     props.map = (article) => {
        //         <Item product={article}/>
        //     }
        // }

        <>
            {product.map((item, id) => {
                return (
                    <section key={id}>
                        <article>
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
        </>
    )
}

export default ItemList