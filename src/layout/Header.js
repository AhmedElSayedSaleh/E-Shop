import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import { BlackLogo, WhiteLogo } from "../assets/images";
import { links } from "../utils/constants";
import { Icon } from "../components";
import { useSelector } from "react-redux";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 30 ||
        document.documentElement.scrollTop > 30
      ) {
        headerRef.current.classList.remove("home-nav");
        headerRef.current.classList.add("sticky__header");
        logoRef.current.src = BlackLogo;
      } else {
        if (pathname === "/") {
          headerRef.current.classList.add("home-nav");
          logoRef.current.src = WhiteLogo;
        } else {
          headerRef.current.classList.remove("home-nav");
          logoRef.current.src = BlackLogo;
        }
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  const handleNavButtonClick = () => {
    setMenuOpen(!menuOpen);

    if (!menuOpen) {
      mobileMenuRef.current.classList.add("mobile-menu--active");
      document.body.style.overflow = "hidden";
      headerRef.current.classList.add("bg-white");
      headerRef.current.classList.remove("home-nav");
      logoRef.current.src = BlackLogo;
    } else {
      if (pathname === "/") {
        headerRef.current.classList.remove("bg-white");
        headerRef.current.classList.add("home-nav");
        logoRef.current.src = WhiteLogo;
      } else {
        headerRef.current.classList.remove("home-nav");
        logoRef.current.src = BlackLogo;
      }
      mobileMenuRef.current.classList.remove("mobile-menu--active");
      document.body.style.overflow = "auto";
    }
  };

  const closeMenu = () => {
    if (pathname === "/") {
      headerRef.current.classList.remove("bg-white");
      headerRef.current.classList.add("home-nav");
      logoRef.current.src = WhiteLogo;
    }
    mobileMenuRef.current.classList.remove("mobile-menu--active");
    document.body.style.overflow = "auto";
    setMenuOpen(false);
  };

  useEffect(() => {
    stickyHeaderFunc();
    return () => {
      window.removeEventListener("scroll", stickyHeaderFunc);
    };
  });

  return (
    <header
      className={`pt-3 border-bottom ${
        pathname === "/" ? "home-nav fixed-top border-bottom-0" : ""
      }`}
      ref={headerRef}
      style={{ height: "6rem" }}
    >
      <div className="h-100 position-relative">
        <nav className="menu">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-6 col-lg-3 text-start menu__logo">
                <Link to="/" onClick={closeMenu}>
                  <img
                    src={pathname === "/" ? WhiteLogo : BlackLogo}
                    alt=""
                    id="logo"
                    ref={logoRef}
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
                        className="px-5 menu__link"
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
                  onClick={closeMenu}
                />
                <Link
                  to="/cart"
                  className=" position-relative"
                  onClick={closeMenu}
                >
                  <Icon
                    icon="cart"
                    size={"3rem"}
                    className={"mx-3 mx-lg-4 menu__icon"}
                    disableFill
                  />
                  <span className="menu__badge">{totalQuantity}</span>
                </Link>
                <Link to={"/login"}>
                  <Icon
                    icon="avatar"
                    size={"3rem"}
                    className={"mx-3 mx-lg-4 menu__icon menu__icon--avatar"}
                    disableFill
                  />
                </Link>
                <Icon
                  icon={menuOpen ? "close" : "menu"}
                  size={"3rem"}
                  className={"mx-3 mx-lg-4 menu__icon menu__icon--bars"}
                  disableFill
                  onClick={handleNavButtonClick}
                />
              </div>
            </div>
          </div>
        </nav>

        <div
          className="mobile-menu main-scroll"
          ref={mobileMenuRef}
          // style={
          //   menuOpen
          //     ? {
          //         height: "calc(100vh - 6rem)",
          //         zIndex: "9999",
          //         top: "100%",
          //         transition: "height .1s ease-in-out",
          //         // overflowY: "auto",
          //       }
          //     : { height: "0px", transition: "height .1s ease-in-out" }
          // }
        >
          <ul className="w-100 h-100">
            {links.map((link) => {
              const { id, text, url } = link;
              return (
                <li key={id} className="my-5">
                  <NavLink
                    to={url}
                    className="h3 menu__link"
                    style={({ isActive }) =>
                      isActive ? { color: "#fbb03b" } : null
                    }
                    // activeStyle={{ color: "#fbb03b" }}
                    onClick={closeMenu}
                  >
                    {text}
                  </NavLink>
                </li>
              );
            })}
            <li>
              <Link to={"/login"} onClick={closeMenu}>
                <Icon
                  icon="avatar"
                  size={"3rem"}
                  className={"mx-3 mx-lg-4 menu__icon "}
                  disableFill
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
