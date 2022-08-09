import React from 'react'

const RemoveProduct = (props) => {
    return (
        <>
            <div className='countContainer'>
                <div className='count'>
                    <p>{props.quantity}</p>
                    <button className='countBtn' onClick={props.add}>Quitar un producto</button>
                </div>
                <button className="countBtn" onClick={props.onAdd}>Limpiar carrito</button>
            </div>
        </>
    )
}

export default RemoveProduct