import React, {useState} from 'react';
import Product from "./Product";

const ProductsList = ({productsData}) => {
    const [modalView, setModalView] = useState({});

    const modalHandle = (product) => {
        productsData.filter((el) => el.id === product.id)
        setModalView(product);
    }

    return productsData.map(product => (
        <Product key={product.id} product={product} modalHandle={modalHandle} modalView={modalView} />
    ))
}
export default ProductsList;