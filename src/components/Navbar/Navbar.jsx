import React, { useState } from 'react'
import BurgerBtn from './BurgerBtn'
import menuItems from './MenuItems'
import CartWidget from './CartWidget'

const Navbar = () => {

    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }
    return (
        <>
            <nav className="NavbarItems">
                <h1 className="navbar-logo"><i class="fa-solid fa-angle-left"></i>Max<span>Design</span><i class="fa-solid fa-angle-right"></i></h1>
                <ul className={`navbarLinks ${clicked ? 'active' : ''}`}>
                    {menuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <div>
                    <BurgerBtn clicked={clicked} handleClick={handleClick} />
                    <div className="cardWidget">
                        <CartWidget className="cardWidget"/>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar