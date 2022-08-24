import { collection, doc, increment, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { db } from '../../utils/firebaseConfig'

const Cart = () => {
    let test = useContext(CartContext);
    const createOrder = () => {
        let itemsForDB = test.cartList.map(item => ({
            id: item.id,
            title: item.title,
            price: item.price,
            quantity: item.quantity
        }))
        let order = {
            buyer: {
                email: "max@des.com",
                name: "Maxi Delfino",
                phone: "34156536"
            },
            date: serverTimestamp(),
            items: itemsForDB,
            total: test.totalProducts()
        }
        const createOrderRef = async () => {
            const newOrderRef = doc(collection(db, 'orders'));
            await setDoc(newOrderRef, order);
            return newOrderRef;
        }
        createOrderRef()
            .then(res => {
                alert(`Tu orden de compra se realizo con éxito! Recuerda tu ID para seguir el envío ${res.id}`)
                return res.id;
            })

        test.cartList.forEach(async (item) => {
            const itemRef = doc(db, 'products', item.id);
            await updateDoc(itemRef, {
                stock: increment(-item.quantity)
            })
        });
        test.clearCart();
    }

    return (
        <>
            <Link to={'/'}><button className='countBtn back'>Volver</button></Link>
            {
                test.cartList.length === 0
                    ? <h2>Carrito vacío</h2>
                    : <section className="itemCart">
                        <section className='checkoutContainer'>
                            <button className='countBtn clearBtn' onClick={test.clearCart}>Limpiar carrito</button>
                            <div className='price'>
                                <div>Precio total: <b>${test.totalPrice()}</b></div>
                                <div>Cantidad de productos: <b>{test.totalProducts()}</b></div>
                            </div>
                            <div className='finishContainer'>
                                <button className='finishBtn countBtn' onClick={createOrder}>Finalizar Compra</button>
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