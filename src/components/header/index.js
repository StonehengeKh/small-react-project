import React from "react"
import {Link} from "react-router-dom"

import './header.css'
import logo from "../../assets/logo.png"
import Search from "../search"

function Header() {
    return(
        <header className="header">
            <div className="logo-block">
                <img className="logo-header" src={logo} alt="Logo" />
                <div className="name-header">
                    <Link to="/" className="link-style">
                        Академия устройства
                    </Link>
                </div>
            </div>
            <nav>
                <ul className="menu-list">
                    <li className="menu-item">
                        <Link to="/list" className="link-style">
                            Уроки
                        </Link>
                    </li>
                    <li className="menu-item" >
                        <Link to="/about-us" className="link-style">
                            О нас
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="search">
                <Link to="/list" className="link-style">
                    <Search />
                </Link>
            </div>
        </header>
    );
}

export default Header