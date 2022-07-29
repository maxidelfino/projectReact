import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
    return (
        <>
            <div>Cart</div>
            <Link to={'/category'}><button className='countBtn'>Volver</button></Link>
        </>
    )
}

export default Cart