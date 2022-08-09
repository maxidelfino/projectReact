import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const Cart = () => {
    let test = useContext(CartContext)
    console.log(test.cartList) //no olvidemos que nuestro array del carrito es cartList!!!

    const removeItem = (id) =>{
        let item = test.cartList.find( item => item.id === id);
        console.log(item.quantity);
        item.quantity = item.quantity - 1;
        console.log(item);
        console.log(item.quantity);
    }

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
                                <p className="quantity"><span>Cantidad: </span>{item.quantity}</p>
                            </div>
                            <div className="removeProducts">
                                <div className='countContainer'>
                                    <div className='count'>
                                        <button className='countBtn'onClick={() => removeItem(item.id)}>Quitar un producto</button>
                                    </div>
                                    <button className="countBtn">Limpiar carrito</button>
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