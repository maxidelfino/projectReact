import React,{useState} from 'react'
import ItemDetail from '../components/ItemDetail/ItemDetail';
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
    .then(() => setProductList(products[id-1]))

  return (
    <>
      <ItemDetail products={productList} />
    </>
  )
}

export default ItemDetailContainer