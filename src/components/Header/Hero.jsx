import React from 'react'

const Hero = () => {
  return (
    <header className='hero'> {/* colocar de bg una imagen */}
      <div>
        <h1>
          Llegó la hora de <span>Vender online</span> {/* Estar en internet - Crear tu sitio web (Darle animaciones para que vayan cambiando las frases)*/}
        </h1>
        <h4>Planes desde 20 USD por mes</h4>
        <button className='btn'>Contrata Aquí</button>
      </div>
    </header>
  )
}

export default Hero