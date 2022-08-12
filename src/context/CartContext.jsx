import { useState, createContext } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  // const isInCart = (id) => cartList.find(item => item.id === id) ? true : false ;

  // const addToCart = (item, counter) => {
  //   let found = cartList.find(products => products.id === item.id) ? true : false;
  //   if (found) {
  //     setCartList([...cartList, {
  //       id: item.id,
  //       title: item.title,
  //       image: item.image,
  //       price: item.price,
  //       quantity: counter
  //     }]);
  //   } else {
  //     found.quantity = found.quantity + counter
  //   }
  // }

  const addToCart = (item, quantity) => {
    let found = cartList.find(products => products.id === item.id) ? true : false;
    if (found) {
      setCartList(cartList.map(product => {
        return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product
      }));
    } else {
      setCartList([...cartList, { ...item, quantity }]);
    }
  }

  const removeOneItem = (id) => {
    let found = cartList.find(item => item.id === id)
    found.quantity = found.quantity - 1;
    setCartList([...cartList]);
    if (found.quantity <= 0) {
      removeItem(id)
    }
  }
  
  const addOneItem = (id) => {
    let found = cartList.find(item => item.id === id)
    found.quantity = found.quantity + 1;
    setCartList([...cartList]);
    if (found.quantity <= 0) {
      removeItem(id)
    }
  }

  const removeItem = (id) => {
    setCartList(cartList.filter(item => item.id !== id));
  }

  const clearCart = () => setCartList([]);

  // const totalProducts = () => {
  //   let cont = 0
  //   cartList.forEach(product => {
  //     cont = cont + product.quantity
  //   });
  //   return cont;
  // }

  const totalProducts = () => cartList.reduce((cont, product) => cont + product.quantity, 0);

  const totalPrice = () => cartList.reduce((cont, product) => cont + product.quantity * product.price, 0);

  return (
    <CartContext.Provider value={{ cartList, addToCart, removeItem, clearCart, removeOneItem, addOneItem, totalProducts, totalPrice }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider