import React, {useState} from 'react';


const ItemCount = (props) => {
    const [counter, setCounter] = useState(props.initial)

    const add = () => {
        if (counter < props.stock) {
            const aux = counter+1; //solo funciona con +1 y no con ++
            setCounter(aux);
        }
    }

    const subtract  = () => {
        if (counter > props.stock) {
            const aux = counter-1;
            setCounter(aux);
        }
    }

    return (
        <>
            <div>
                <button className='btnCount' onClick={subtract}>-</button>
                <p>{counter}</p>
                <button className='btnCount' onClick={add}>+</button>
            </div>
            <button className='btnCount' onClick={props.onAdd}>Agregar al carrito</button>
        </>
    )
}

export default ItemCount