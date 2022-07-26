import React from 'react'

const Item = (props) => {
    return (
        <section>
            <article>
                <div>
                    <h1>{props.name}</h1>
                    <p>{props.price}</p>
                </div>
                <div>
                   <img src={props.image} alt={props.name} />
                </div>
            </article>
        </section>
    )
}

export default Item