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
  }, [id])

  return (
    <>
      <ItemDetail products={productList} />
    </>
  )
}

export default ItemDetailContainer