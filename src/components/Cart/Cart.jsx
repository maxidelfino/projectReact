import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const Cart = () => {
    let test = useContext(CartContext)
    console.log(test.cartList) //no olvidemos que nuestro array del carrito es cartList!!!
    return (
        <>
            <div>Cart</div>
            <Link to={'/category'}><button className='countBtn'>Volver</button></Link>
            <hr />
            <button className='countBtn' onClick={test.clearCart}>Limpiar carrito</button>
            <div>Precio total: <b>${test.totalPrice()}</b></div>
            <section className="itemCart">
                {
                    test.cartList.length > 0 && test.cartList.map(item => (
                        <article className="product-cart">
                            <div className="product-image">
                                <img src={`${item.image}`} alt={item.title} />
                            </div>
                            <div className="product-content">
                                <h3 className="title"><span>Producto: </span>{item.title}</h3>
                            </div>
                            <div className="product-price">
                                <p className="price"><span>Precio: </span>${item.price}</p>
                                <p><span>Subtotal: </span>${item.price*item.quantity}</p>
                                <p className="quantity"><span>Cantidad: </span>{item.quantity}</p>
                            </div>
                            <div className="removeProducts">
                                <div className='countContainer'>
                                    <div className='count'>
                                        <button className='countBtn' onClick={() => test.removeOneItem(item.id)}>Quitar un producto</button>
                                    </div>
                                    <button className="countBtn" onClick={() => test.removeItem(item.id)}>Eliminar del carrito</button>
                                </div>
                            </div>
                        </article>
                    ))
                }
            </section>
        </>
    )
}

export default Cart