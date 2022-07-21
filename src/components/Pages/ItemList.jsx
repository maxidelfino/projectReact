import React from 'react';

const ItemList = (props) => {


    return (
        <>
            <div>{props.name}</div>
        </>
        // <div className='itemContainer'>
        //     {product.map((item, id) => {
        //         return (
        //             <section key={id} >
        //                 <article>
        //                     <div>
        //                         <h1>{item.title}</h1>
        //                         <p>{item.price}</p>
        //                     </div>
        //                     <div>
        //                         <img src={`${item.image}`} alt={`${item.title}`} />
        //                     </div>
        //                 </article>
        //                 <hr/>
        //             </section>
        //         )
        //     })}
        // </div>
    )
}

export default ItemList