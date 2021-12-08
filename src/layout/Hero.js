import React from "react";
import { Redirect, Route, Switch } from "react-router";
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
      <ScrollToTop />
      <main>
        <Switch>
          <Route path={"/"} render={() => <Home />} exact />
          <Route path={"/bags"} render={() => <Bags />} />
          <Route path={"/shoes"} render={() => <Shoes />} />
          <Route path={"/jewelry"} render={() => <Jewelry />} />

          <Route path={"/products"} render={() => <ProductsList />} />
          <Route
            path={"/product/:id"}
            render={(props) => <ProductView id={props.match.params.id} />}
          />
          <Route path={"/cart"} render={() => <Cart />} />

          <Route path={"/register"} render={() => <Register />} />
          <Route path={"/login"} render={() => <Login />} />
          <Route path={"/logout"} render={() => <Redirect to="/" />} />

          <Route component={NotFound} />
        </Switch>
      </main>
    </>
  );
};

export default Hero;
