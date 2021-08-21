import React from 'react';
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
                                <a href={"/bags"} className="px-5 menu__link">Bags</a>
                                <a href={"/shoes"} className="px-5 menu__link">Shoes</a>
                                <a href={"/jewelry"} className="px-5 menu__link">Jewelry</a>
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