import React, { useState } from 'react'
import BurgerBtn from './BurgerBtn'
import menuItems from './MenuItems'

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
                <BurgerBtn clicked={clicked} handleClick={handleClick} />   
            </nav>
        </>
    )
}

export default Navbar