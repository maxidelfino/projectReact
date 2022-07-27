import React from 'react'

const Item = (props) => {
    return (
        <section className="">
            <article className="product-grid">
                <div className="product-image">
                    <img src={`${props.image}`} alt={props.name} />
                </div>
                <div className="product-content">
                    <h3 className="title">{props.name}</h3>
                    <p className="price">${props.price}</p>
                </div>
            </article>
        </section>
    )
}

export default Item