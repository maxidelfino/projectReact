import React, { useState } from 'react';

const ItemList = (props) => {
    let stock = 10;
    const [contArticle, setArticle] = useState(0);

    const handleClick = () => {
        if (contArticle < stock && contArticle >=0) {
            setArticle(contArticle + 1);
        }
    }
    const notHandleClick = () => {
        if (contArticle <= stock && contArticle >0) {
            setArticle(contArticle - 1);
        }
    }
    return (
        <>
            <section>
                <article>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                </article>
                <article>
                    <h5>{props.price}</h5>
                    <button onClick={handleClick}>Agregar al carrito</button>
                    <p>{contArticle} Artículos</p>
                    <button onClick={notHandleClick}>Quitar del carrito</button>
                </article>
            </section>
        </>
    )
}

export default ItemList