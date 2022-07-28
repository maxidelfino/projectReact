import React, { useState } from 'react';


const ItemCount = (props) => {
    const [counter, setCounter] = useState(props.initial)

    const add = () => {
        if (counter < props.stock) {
            const aux = counter + 1; //solo funciona con +1 y no con ++
            setCounter(aux);
        }
    }

    const subtract = () => {
        if (counter <= props.stock && counter >= props.initial) {
            const aux = counter - 1;
            setCounter(aux);
        }
    }

    const onAdd = () => {
        console.log(`La cantidad comprada es ${counter}`)
    }
    return (
        <>
            <div className='countContainer'>
                <div className='count'>
                    <button className='countBtn' onClick={subtract}>-</button>
                    <p>{counter}</p>
                    <button className='countBtn' onClick={add}>+</button>
                </div>
                <button className='countBtn' onClick={onAdd}>Agregar al carrito</button> {/* Recordemos que la function onAdd recibe un parámetro!!! */}
            </div>
        </>
    )
}

export default ItemCount