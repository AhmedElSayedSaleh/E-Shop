import React from "react";
import { Link, NavLink } from "react-router-dom";

import { Logo } from "../assets/images";
import { links } from "../utils/constants";
import { Icon } from "../components";

const Header = () => {
  return (
    <header className="py-4">
      <nav className="menu">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-6 col-lg-3 text-start menu__logo">
              <Link to="/">
                <img src={Logo} alt="" />
                <span>E-</span>Shop
              </Link>
            </div>
            <ul className="col-lg-6 mb-0 menu__links">
              {links.map((link) => {
                const { id, text, url } = link;
                return (
                  <li key={id}>
                    <NavLink
                      to={url}
                      className="px-5 menu__links__link"
                      activeStyle={{ color: "#fbb03b" }}
                    >
                      {text}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
            <div className="col-6 col-lg-3 d-flex justify-content-end">
              <Icon
                icon="search"
                size={"3rem"}
                className={"mx-3 mx-lg-4 menu__icon"}
                disableFill
              />
              <Link to="/cart">
                <Icon
                  icon="cart"
                  size={"3rem"}
                  className={"mx-3 mx-lg-4 menu__icon"}
                  disableFill
                />
              </Link>
              <div className="dropdown">
                <div
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <Icon
                    icon="avatar"
                    size={"3rem"}
                    className={"mx-3 mx-lg-4 menu__icon menu__icon--avatar"}
                    disableFill
                  />
                </div>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <div>
                    <li>
                      <Link className="dropdown-item" to="/register">
                        Register
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/login">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/logout">
                        Logout
                      </Link>
                    </li>
                  </div>
                </ul>
              </div>
              <Icon
                icon="menu"
                size={"3rem"}
                className={"mx-3 mx-lg-4 menu__icon menu__icon--bars"}
                disableFill
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
