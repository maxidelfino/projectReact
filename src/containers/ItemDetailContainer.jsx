import React,{useState} from 'react'
import ItemDetail from '../components/ItemDetail/ItemDetail';
import products from '../data/products.json';
import {useParams} from 'react-router';
import { useEffect } from 'react';
import { doc, getDocs } from "firebase/firestore";
import { db } from '../utils/firebaseConfig'

const ItemDetailContainer = () => {
  const [productList, setProductList] = useState({});

  const {id} = useParams();

  // const myPromise = (timeOut, products) => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(products);
  //     }, timeOut);
  //   });
  // }
  useEffect(()=>{
    getDocs(doc(db, 'products', '1'))
    .then(res => setProductList({
      id: res.id,
      ...res.data()
    }))

    // if (id === undefined){
    //     myPromise()
    //     .then(() => myPromise(1000, products))
    //     .then(() => setProductList(products))
    // } else {
    //     myPromise()
    //     .then(() => myPromise(1000, products.filter(item => item.id === id)))
    //     .then(() => setProductList(products.filter(item => item.id === id)))
    //     console.log(products.filter(item => item.id === id))
    // }
},[id])
  // myPromise()
  //   .then(() => setProductList(products[id-1]))

  return (
    <>
      <ItemDetail products={productList} />
    </>
  )
}

export default ItemDetailContainer