import React from 'react';
import {Link} from "react-router-dom";
import Icon from "../compnents/Icons";

import "../styles/components/breadcrumb.scss";

function Breadcrumb({product}) {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item breadcrumb-item-icon">
                    <Link to="/">
                        <Icon icon="home" size={"1.5rem"} />
                    </Link>
                </li>
                <li className="breadcrumb-item">
                    <Link to={`/category/${product.category}`}>{product.category}</Link>
                </li>
                <li className="breadcrumb-item">
                    <Link to={`/subcategory/${product.subcategory}`}>{product.subcategory}</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">{product.name}</li>
            </ol>
        </nav>    );
}

export default Breadcrumb;