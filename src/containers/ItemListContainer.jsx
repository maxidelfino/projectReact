import React from 'react';
import ItemList from '../components/Pages/ItemList';
const ItemListContainer = () => {
    return (
        <>
            <ItemList
                title='Basic'
                description='Obtén credibilidad para tu negocio. De esta manera transmitirás seguridad, estabilidad y confianza en tu cliente'
                price={20} /> {/* precio total 100 */}
            <hr />
            <ItemList
                title='Standard'
                description='Obtén credibilidad para tu negocio. De esta manera transmitirás seguridad, estabilidad y confianza en tu cliente'
                price={30} /> {/* precio total 150 */}
            <hr />
            <ItemList
                title='Premium'
                description='Obtén credibilidad para tu negocio. De esta manera transmitirás seguridad, estabilidad y confianza en tu cliente'
                price={40} /> {/* precio total 200 */}
        </>
    )
}

export default ItemListContainer;
