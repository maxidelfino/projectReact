import React from 'react'
import ItemList from './ItemList';

const ItemListContainer = () => {
    return (
        <main>
           <ItemList
           title = 'Basic'
           description = 'Obtén credibilidad para tu negocio. De esta manera transmitirás seguridad, estabilidad y confianza en tu cliente'
           price = {20}  // precio total 100
           />
           <ItemList
           title = 'Standard'
           description = 'Obtén credibilidad para tu negocio. De esta manera transmitirás seguridad, estabilidad y confianza en tu cliente'
           price = {30} // precio total 150
           />
           <ItemList
           title = 'Premium'
           description = 'Obtén credibilidad para tu negocio. De esta manera transmitirás seguridad, estabilidad y confianza en tu cliente'
           price = {40} // precio total 200
           />
        </main>
    )
}

export default ItemListContainer