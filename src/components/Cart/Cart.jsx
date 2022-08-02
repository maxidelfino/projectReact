import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import ItemCountLogic from '../ItemCount/ItemCountLogic'

const Cart = () => {
    let test = useContext(CartContext)
    console.log(test.cartList) //no olvidemos que nuestro array del carrito es cartList!!!
    return (
        <>
            <div>Cart</div>
            <Link to={'/category'}><button className='countBtn'>Volver</button></Link>
            <hr />
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
                                <p className="quantity"><span>Cantidad: </span>2</p>
                            </div>
                            <div className="removeProducts">
                                <ItemCountLogic/>
                            </div>
                        </article>
                    ))
                }
            </section>
        </>
    )
}

export default Cart