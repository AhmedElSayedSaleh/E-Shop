import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  Home,
  Bags,
  Shoes,
  Jewelry,
  ProductView,
  ProductsList,
  NotFound,
  Cart,
} from "../pages";
import { ScrollToTop, Register, Login } from "../components";

const Hero = () => {
  return (
    <>
      {/* <ScrollToTop /> */}
      <main>
        <Routes>
          <Route path={"*"} element={<NotFound />} />

          <Route path={"/"} element={<Home />} exact />
          <Route path={"/bags"} element={<Bags />} />
          <Route path={"/shoes"} element={<Shoes />} />
          <Route path={"/jewelry"} element={<Jewelry />} />

          <Route path={"/products"} element={<ProductsList />} />
          <Route path={"/product/:id"} element={<ProductView />} />
          <Route path={"/cart"} element={<Cart />} />

          <Route path={"/register"} element={<Register />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/logout"} element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </>
  );
};

export default Hero;
