import React from 'react'

const BurgerBtn = (props) => {
    return (
        <div onClick={props.handleClick} className={`menu-icon icon nav-icon-6 ${props.clicked ? 'open' : ''}`} >
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default BurgerBtn