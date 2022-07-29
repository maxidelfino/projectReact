import React, { useState } from 'react'
import BurgerBtn from './BurgerBtn'
import menuItems from './MenuItems'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked)
    }
    return (
        <>
            <nav className="NavbarItems">
                <Link to='/'><h1 className="navbar-logo"><i class="fa-solid fa-angle-left"></i>Rop<span>Des</span><i class="fa-solid fa-angle-right"></i></h1></Link>
                <ul className={`navbarLinks ${clicked ? 'active' : ''}`}>
                    {menuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.id}>
                                    <p className={item.cName} href={item.url}>
                                        {item.title}
                                    </p>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <div>
                    <BurgerBtn clicked={clicked} handleClick={handleClick} />
                    <div className="cardWidget">
                        <CartWidget className="cardWidget" count={23} />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar