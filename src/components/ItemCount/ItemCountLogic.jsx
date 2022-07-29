import React, { useState } from 'react';
import ItemCount from './ItemCount';
import Checkout from '../Cart/Checkout';


const ItemCountLogic = (props) => {
    const [counter, setCounter] = useState(props.initial)

    const [checkout, setCheckout] = useState(true);

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
            alert(`La cantidad comprada es ${counter}`);
            setCheckout(false);
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