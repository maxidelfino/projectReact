import React, { useState, useEffect } from 'react';
import ItemList from '../components/Item/ItemList';
import products from '../data/products.json';
import { useParams } from 'react-router';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../utils/firebaseConfig'

const ItemListContainer = () => {
    const [productList, setProductList] = useState([]);

    const { id } = useParams();

    // const myPromise = (timeOut, products) => {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(products);
    //         }, timeOut);
    //     });
    // }

    useEffect(() => {
        if (id === undefined) {
            const firestoreFetch = async () => {
                const querySnapshot = await getDocs(collection(db, "products"));
                const dataFromFirestore = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                return dataFromFirestore
            }
            firestoreFetch()
                .then(result => setProductList(result))
                .catch(err => console.log(err))
        } else {
            const queryFilter = query(collection(db, 'products'), where('categoryId', '==', id))
            const firestoreFetchElse = async () => {
                const querySnapshot = await getDocs(queryFilter);
                const dataFromFirestore = querySnapshot.docs.map( product => ({ 
                    id: product.id, 
                    ...product.data() 
                }))
                return dataFromFirestore
            }
            firestoreFetchElse()
                .then(result => setProductList(result))
                .catch(err => console.log(err))
        }

        // if (id === undefined){
        //     myPromise()
        //     .then(() => myPromise(1500, products))
        //     .then(() => setProductList(products))
        // } else {
        //     myPromise()
        //     .then(() => myPromise(1500, products.filter(item => item.categoryId === id)))
        //     .then(() => setProductList(products.filter(item => item.categoryId === id)))
        //     console.log(products.filter(item => item.categoryId === id))
        // }
    }, [id])

    return (
        <>
            <ItemList products={productList} />
        </>
    )
}

export default ItemListContainer