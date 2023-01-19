import React, { useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import { BlackLogo, WhiteLogo } from "../assets/images";
import { links } from "../utils/constants";
import { Icon } from "../components";
import { useSelector } from "react-redux";

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const stickyHeaderFunc = () => {
    let Logo = document.querySelector("#logo");

    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 30 ||
        document.documentElement.scrollTop > 30
      ) {
        headerRef.current.classList.remove("home-nav");
        headerRef.current.classList.add("sticky__header");
        Logo.src = BlackLogo;
      } else {
        if (pathname === "/") {
          headerRef.current.classList.add("home-nav");
          Logo.src = WhiteLogo;
        } else {
          headerRef.current.classList.remove("home-nav");
          Logo.src = BlackLogo;
        }
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return () => {
      window.removeEventListener("scroll", stickyHeaderFunc);
    };
  });

  return (
    <header
      className={`py-3 border-bottom ${
        pathname === "/" ? "home-nav fixed-top border-bottom-0" : ""
      }`}
      ref={headerRef}
    >
      <nav className="menu">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-6 col-lg-3 text-start menu__logo">
              <Link to="/">
                <img
                  src={pathname === "/" ? WhiteLogo : BlackLogo}
                  alt=""
                  id="logo"
                />
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
                      style={({ isActive }) =>
                        isActive ? { color: "#fbb03b" } : null
                      }
                      // activeStyle={{ color: "#fbb03b" }}
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
              <Link to="/cart" className=" position-relative">
                <Icon
                  icon="cart"
                  size={"3rem"}
                  className={"mx-3 mx-lg-4 menu__icon"}
                  disableFill
                />
                <span className="menu__badge">{totalQuantity}</span>
              </Link>
              <div className="dropdown menu__dropdown">
                <Link
                  to={"/login"}
                  // id="dropdownMenuLink"
                  // data-bs-toggle="dropdown"
                  // aria-expanded="false"
                >
                  <Icon
                    icon="avatar"
                    size={"3rem"}
                    className={"mx-3 mx-lg-4 menu__icon menu__icon--avatar"}
                    disableFill
                  />
                </Link>
                {/* <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <div>
                    <li>
                      <Link className="dropdown-item text-black" to="/register">
                        Register
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-black" to="/login">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-black" to="/logout">
                        Logout
                      </Link>
                    </li>
                  </div>
                </ul> */}
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
