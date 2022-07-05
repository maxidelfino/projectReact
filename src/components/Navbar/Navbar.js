import React, { Component } from "react";
import { menuItems } from "./MenuItems";
import '../../css/main.css';

class NavBar extends React.Component {
    state = {clicked: false}
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo"><i class="fa-solid fa-angle-left"></i>Max<span>Design</span><i class="fa-solid fa-angle-right"></i></h1>
                <ul className={`navbarLinks ${this.state.clicked ? 'active' : ''}`}>
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
                <div className="menu-icon" onClick={this.handleClick}>
                    <div className={`icon nav-icon-6 ${this.state.clicked ? 'open': ''}`} >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar