import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-col-1'>
       <Link to='/'> <h1 className="navbar-logo "><i class="fa-solid fa-angle-left"></i>Rop<span>Des</span><i class="fa-solid fa-angle-right"></i></h1></Link>
        </div>
        <div className='footer-col-2'>
            <p>Trabajamos con las más alta <b>calidad</b>. Todo lo que hacemos en RopDes está destinado a ser <b>recordado</b>.</p>
        </div>
        <div className='footer-col-3'>
            <a href="https://www.linkedin.com/in/maximiliano-delfino/" target="_blank" rel="noopener noreferrer">Comunícate con nosotros</a>
        </div>
    </div>
    )
}

export default Footer