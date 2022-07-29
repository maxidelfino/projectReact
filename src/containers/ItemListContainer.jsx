import React, { useState } from 'react';
import ItemList from '../components/Item/ItemList';
import products from '../data/products.json';
import {useParams} from 'react-router';
import { useEffect } from 'react';

const ItemListContainer = () => {
    const [productList, setProductList] = useState([]);

    const {id} = useParams();

    const myPromise = (timeOut, products) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, timeOut);
            console.log('se ejecuto la promesa');
        });
    }
    
    useEffect(()=>{
        if (id === undefined){
            myPromise()
            .then(() => myPromise(1500, products))
            .then(() => setProductList(products))
        } else {
            myPromise()
            .then(() => myPromise(1500, products.filter(item => item.categoryId === id)))
            .then(() => setProductList(products.filter(item => item.categoryId === id)))
            console.log(products.filter(item => item.categoryId === id))
        }
    },[id])

    return (
        <>
            <ItemList products = {productList}/>
        </>
    )
}

export default ItemListContainer