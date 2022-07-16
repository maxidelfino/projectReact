import React from 'react'
import ItemList from './ItemList';

const ItemListContainer = () => {
    const onAdd = (param) => {
        console.log(`La cantidad comprada es ${param}`)
    }
    return (
        <main>
           <ItemList
           title = 'Basic'
           description = 'Obtén credibilidad para tu negocio. De esta manera transmitirás seguridad, estabilidad y confianza en tu cliente'
           price = {20}  // precio total 100
           initial = {1}
           stock = {10}
           onAdd = {onAdd}
           />
           <ItemList
           title = 'Standard'
           description = 'Obtén credibilidad para tu negocio. De esta manera transmitirás seguridad, estabilidad y confianza en tu cliente'
           price = {30} // precio total 150
           initial = {0}
           stock = {10}
           onAdd = {onAdd}
           />
           <ItemList
           title = 'Premium'
           description = 'Obtén credibilidad para tu negocio. De esta manera transmitirás seguridad, estabilidad y confianza en tu cliente'
           price = {40} // precio total 200
           initial = {0}
           stock = {10}
           onAdd = {onAdd}
           />
        </main>
    )
}

export default ItemListContainer