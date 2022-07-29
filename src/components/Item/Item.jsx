import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
    return (
        <section className="">
            <article className="product-grid">
                <div className="product-image">
                    <img src={`${props.image}`} alt={props.name} />
                </div>
                <div className="product-content">
                    <Link to={`/item/${props.id}`}><h3 className="title">{props.name}</h3></Link>
                    <p className="price">${props.price}</p>
                </div>
            </article>
        </section>
    )
}

export default Item