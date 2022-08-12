import React, { useState, useContext } from 'react';
import ItemCount from './ItemCount';
import Checkout from '../Cart/Checkout';
import { CartContext } from '../../context/CartContext';


const ItemCountLogic = (props) => {
    const [counter, setCounter] = useState(props.initial);

    const [checkout, setCheckout] = useState(true);
    
    const test = useContext(CartContext);

    const add = () => {
        if (counter < props.stock) {
            const aux = counter + 1; //solo funciona con +1 y no con ++
            setCounter(aux);
        }
    }

    const subtract = () => {
        if (counter <= props.stock && counter >= props.initial) {
            const aux = counter - 1;
            setCounter(aux);
        }
    }

    const onAdd = () => {
        if (counter !== 0 && checkout===true) {
            setCheckout(false);
            test.addToCart(props.products,counter);
        }else {
            setCheckout(true);
        }
    }
    return (
        <>
         {
            checkout === true 
            ?  <ItemCount add={add} subtract={subtract} onAdd={onAdd} counter={counter} />
            :  <Checkout onAdd={onAdd}/>
         }
        </>
    )
}

export default ItemCountLogic