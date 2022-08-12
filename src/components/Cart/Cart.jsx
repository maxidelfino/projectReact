import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const Cart = () => {
    let test = useContext(CartContext)
    console.log(test.cartList) //no olvidemos que nuestro array del carrito es cartList!!!
    return (
        <>
            <Link to={'/category'}><button className='countBtn back'>Volver</button></Link>
            {
                test.cartList.length === 0
                    ? <h2>Carrito vacío</h2>
                    : <section className="itemCart">
                        <section className='checkoutContainer'>
                            <button className='countBtn clearBtn' onClick={test.clearCart}>Limpiar carrito</button>
                            <div className='price'>
                                <div>Precio total: <b>${test.totalPrice()}</b></div>
                            </div>
                            <div className='finishContainer'>
                                <Link to='buy'><button className='finishBtn countBtn'>Finalizar Compra</button></Link>
                            </div>
                        </section>
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
                                        <p><span>Subtotal: </span>${item.price * item.quantity}</p>
                                        <p className="quantity"><span>Cantidad: </span>{item.quantity}</p>
                                    </div>
                                    <div className="removeProducts">
                                        <div className='countContainer'>
                                            <button className='countBtn' onClick={() => test.addOneItem(item.id)}>Agregar un producto</button>
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
            }
        </>
    )
}

export default Cart