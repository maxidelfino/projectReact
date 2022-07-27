import React,{useState} from 'react'

import ItemDetail from '../components/Pages/ItemDetail';
import products from '../data/products.json';

const ItemDetailContainer = () => {
  const [productList, setProductList] = useState({});

  const myPromise = (timeOut, products) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, timeOut);
      console.log('se ejecuto la promesa');
    });
  }
  myPromise()
    .then(() => myPromise(5000, products[6]))
    .then(() => setProductList(products[6]))

  return (
    <>
      <ItemDetail products={productList} />
    </>
  )
}

export default ItemDetailContainer