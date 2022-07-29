import React from 'react'
import { Link } from 'react-router-dom'


const Checkout = (props) => {
  return (
    <>
        <Link to={'/cart'}><button className='countBtn' onClick={props.onAdd}>Ir la carrito</button></Link>
    </>
  )
}

export default Checkout