import React, { useState } from 'react';
import ItemList from '../components/Pages/ItemList';
import products from '../data/products.json';

const ItemListContainer = () => {
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
            <ItemList products = {productList}/>
        </>
    )
}

export default ItemListContainer