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
    .then(() => myPromise(1, products[7]))
    .then(() => setProductList(products[7]))

  return (
    <>
      <ItemDetail products={productList} />
    </>
  )
}

export default ItemDetailContainer