import React, { Component } from "react";
import { menuItems } from "./MenuItems";
import '../../css/main.css';
import BurgerBtn from "./BurgerBtn";

class NavBar extends React.Component {
    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo"><i class="fa-solid fa-angle-left"></i>Max<span>Design</span><i class="fa-solid fa-angle-right"></i></h1>
                <ul className="navbarLinks active">
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
                <div className="menu-icon">
                    <BurgerBtn />
                </div>
            </nav>
        )
    }
}

export default NavBar