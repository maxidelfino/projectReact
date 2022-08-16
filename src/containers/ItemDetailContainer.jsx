import React, { useState, useEffect } from 'react'
import ItemDetail from '../components/ItemDetail/ItemDetail';
import { useParams } from 'react-router';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../utils/firebaseConfig'

const ItemDetailContainer = () => {
  const [productList, setProductList] = useState({});

  const { id } = useParams();

  useEffect(() => {
    getDoc(doc(db, 'products', id))
    .then(res => setProductList({
      id: res.id,
      ...res.data()
    }))
    // const myPromise = (timeOut, products) => {
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve(products);
    //     }, timeOut);
    //   });
    // }
    
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
  }, [id])
  // myPromise()
  //   .then(() => setProductList(products[id-1]))

  return (
    <>
      <ItemDetail products={productList} />
    </>
  )
}

export default ItemDetailContainer