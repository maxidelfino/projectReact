import React, { useState, useEffect } from 'react';
import ItemList from '../components/Item/ItemList';
import { useParams } from 'react-router';
import { firestoreFetch } from '../utils/firestoreFetch';

const ItemListContainer = () => {
    const [productList, setProductList] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        firestoreFetch(id)
            .then(result => setProductList(result))
            .catch(err => console.log(err))
    }, [id])

    return (
        <>
            <ItemList products={productList} />
        </>
    )
}

export default ItemListContainer