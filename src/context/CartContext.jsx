import { useState, createContext} from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item,counter) => {
    setCartList([...cartList, item]);
    item.quantity = counter;
  }

  return (
    <CartContext.Provider value={{ cartList, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider