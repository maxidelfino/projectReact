import React from 'react'

const ItemCount = (props) => {
    return (
        <>
            <div className='countContainer'>
                <div className='count'>
                    <button className='countBtn' onClick={props.subtract}>-</button>
                    <p>{props.counter}</p>
                    <button className='countBtn' onClick={props.add}>+</button>
                </div>
                <button className={`countBtn ${props.counter === 0 ? 'active' : ''}`} onClick={props.counter === 0 ? '' : props.onAdd}>Agregar al carrito</button> {/* Recordemos que la function onAdd recibe un parámetro!!! */}
                <p>Stock: {props.stock}</p>
            </div>
        </>
    )
}

export default ItemCount