import React from 'react';
import {BrowserRouter, NavLink} from "react-router-dom";

import Logo from "../assets/images/logo.webp";
import Icon from "../compnents/Icons";
import "../styles/layout/header.scss";

function Header() {
    return (
            <header className="py-4">
                <nav className="menu">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-4 text-start menu__logo">
                                    <img src={Logo} alt=""/>
                                    <a href={"/"} className="ps-4"><span>E-</span>Shop</a>
                            </div>
                            <div className="col-4 text-center">
                                <BrowserRouter>
                                    <NavLink to={"/bags"} className="px-5 menu__link">Bags</NavLink>
                                    <NavLink to={"/shoes"} className="px-5 menu__link">Shoes</NavLink>
                                    <NavLink to={"/jewelry"} className="px-5 menu__link">Jewelry</NavLink>
                                </BrowserRouter>
                            </div>
                            <div className="col-4 text-end">
                                <Icon icon="search" size={"3rem"} className={"mx-4 menu__icon"} />
                                <Icon icon="cart" size={"3rem"} className={"mx-4 menu__icon"} />
                                <Icon icon="avatar" size={"3rem"} className={"mx-4 menu__icon"} />
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
    );
}

export default Header;