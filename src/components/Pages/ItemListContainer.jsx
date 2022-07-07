import React from 'react'

const Main = (props) => {
    return (
        <section>
            <article>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </article>
            <article>
                <h5>{props.price}</h5>
            </article>
        </section>
    )
}

export default Main