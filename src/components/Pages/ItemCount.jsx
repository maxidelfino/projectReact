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

    const onAdd = (param) => {
        console.log(`La cantidad comprada es ${param}`)
    }
    return (
        <>
            <div>
                <button className='btnCount' onClick={subtract}>-</button>
                <p>{counter}</p>
                <button className='btnCount' onClick={add}>+</button>
            </div>
            <button className='btnCount' onClick={onAdd(counter)}>Agregar al carrito</button> {/* Recordemos que la function onAdd recibe un parámetro!!! */}
        </>
    )
}

export default ItemCount