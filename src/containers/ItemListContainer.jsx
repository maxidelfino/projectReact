import React, { useState } from 'react';
import ItemCount from '../components/Pages/ItemCount';
import ItemList from '../components/Pages/ItemList';
import products from '../data/products.json';

const ItemListContainer = () => {
    const onAdd = (param) => {
        console.log(`La cantidad comprada es ${param}`)
    }

    const [productList, setProductList] = useState([]);

    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 5000);
    });

    myPromise.then((res)=> {
        setProductList(res);
        console.log('se ejecuto la promesa');
    }) 



    return (
        <>
            <ItemCount  initial = {1} stock = {10} onAdd = {onAdd}/>
           <ItemList item={productList}/>
        </>
    )
}

export default ItemListContainer