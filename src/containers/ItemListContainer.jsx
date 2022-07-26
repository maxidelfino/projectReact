import React, { useState } from 'react';
import ItemCount from '../components/Pages/ItemCount';
import ItemList from '../components/Pages/ItemList';
import products from '../data/products.json';

const ItemListContainer = () => {
    const onAdd = (param) => {
        console.log(`La cantidad comprada es ${param}`)
    }

    const [productList, setProductList] = useState([]);

    const myPromise = (timeOut, products) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, timeOut);
            console.log('se ejecuto la promesa');
        });
    }
    myPromise()
        .then(() => myPromise(5000, products))
        .then(() => setProductList(products))

    return (
        <>
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
            <ItemList products = {productList}/>
            {/* <ul>
                {
                    productList.length > 0 ?
                        productList.map(item => (
                           <ItemList key={item.id} name={item.title}/>
                        )) :
                        <p>Cargando...</p>
                }
            </ul> */}
        </>
    )
}

export default ItemListContainer