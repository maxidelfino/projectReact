import React from 'react';
import Item from './Item'

const ItemList = ({ products }) => {
    return (
        <>
            <ul className='itemContainer'>
                {
                    products.length > 0 ?
                        products.map(item => (
                            <Item
                                key={item.id}
                                name={item.title}
                                price={item.price}
                                image={item.image}
                            />
                        )) :
                        <p>Cargando...</p>
                }
            </ul>
        </>
    )
}

export default ItemList