
import React from "react";
import {NavLink} from 'react-router-dom';
import '../styles/Header.scss'

const Header = () => {

    return (
        <header className={"header"}>
            <nav>
                <ul className={'nav-items'}>
                    <li><NavLink exact to='/' activeClassName="active">Products</NavLink></li>
                    <li><NavLink to='/favorites' activeClassName="active">Favorites</NavLink></li>
                    <li><NavLink to='/cart' activeClassName="active">Cart</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
