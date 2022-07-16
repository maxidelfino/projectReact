import React, {useState} from 'react';


const ItemCount = ({initial,stock,onAdd}) => {
    const [counter, setCounter] = useState = (initial)

    const add = () => {
        if (counter < stock) {
            const aux = counter++;
            setCounter(aux);
        }
    }

    const subtract  = () => {
        if (counter > stock) {
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
            <button className='btnCount' onClick={onAdd}>Agregar al carrito</button>
        </>
    )
}

export default ItemCount