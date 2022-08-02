import React , {useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const Cart = () => {
    let test = useContext(CartContext)
    console.log(test.cartList)
    return (
        <>
            <div>Cart</div>
            <hr />
            <Link to={'/category'}><button className='countBtn'>Volver</button></Link>
        </>
    )
}

export default Cart