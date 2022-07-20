import React from 'react'

const Item = ({product}) => {
    return (
        <section>
            <article>
                <div>
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                </div>
                <div>
                    <p>{product.priceMes}</p>
                </div>
            </article>
        </section>
    )
}

export default Item