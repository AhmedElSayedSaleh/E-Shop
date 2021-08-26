import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Home from "../pages/Home";
import ProductDetails from "../compnents/products/ProductDetails";

const Hero = () => {
    return (
        <BrowserRouter>
            <main>
                <Route path={'/'} component={Home} exact />
                <Route path={'/product/:id'} component={ProductDetails} />
            </main>
        </BrowserRouter>
    );
};

export default Hero;
