import React,{useState} from 'react'
import ItemDetail from '../components/Pages/ItemDetail';
import products from '../data/products.json';
import {useParams} from 'react-router';
import { useEffect } from 'react';

const ItemDetailContainer = () => {
  const [productList, setProductList] = useState({});

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
        .then(() => myPromise(1000, products))
        .then(() => setProductList(products))
    } else {
        myPromise()
        .then(() => myPromise(1000, products.filter(item => item.id === id)))
        .then(() => setProductList(products.filter(item => item.id === id)))
        console.log(products.filter(item => item.id === id))
    }
},[id])
  myPromise()
    .then(() => myPromise(1, products[7]))
    .then(() => setProductList(products[7]))

  return (
    <>
      <ItemDetail products={productList} />
    </>
  )
}

export default ItemDetailContainer