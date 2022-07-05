import React from 'react'
import '../../css/main.css';

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