import React, { useState } from 'react';

const ItemList = (props) => {
    const [counter, setCounter] = useState(props.initial);

    const add = () => {
        if (counter < props.stock) {
            let aux = counter+1; //solo funciona con +1 y no con ++
            setCounter(aux);
        }
    }

    const subtract = () => {
        if (counter > props.initial) {
            let aux = counter-1;
            setCounter(aux);
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
                    <div>
                        <button onClick={(subtract)}>-</button>
                        <p>{counter}</p>
                        <button onClick={(add)}>+</button>
                    </div>
                    <button onClick={(props.onAdd)}>Agregar al carrito</button>
                </article>
            </section>
        </>
    )
}

export default ItemList