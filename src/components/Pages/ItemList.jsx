import React, {useState} from 'react'

const ItemList = (props) => {
    const [contArticle, setArticle] = useState(0);
    const handleClick = () => {
        setArticle(contArticle + 1);
    } 
    return (
        <section>
            <article>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </article>
            <article>
                <h5>{props.price}</h5>
                <button onClick={handleClick}>Agregar al carrito</button> {contArticle} Artículos
            </article>
        </section>
    )
}

export default ItemList