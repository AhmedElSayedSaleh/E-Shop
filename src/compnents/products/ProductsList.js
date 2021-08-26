import React, {useState} from 'react';
import productsData from '../../data/sample.json';

import Product from "./Product";

const ProductsList = () => {
    const [modalView, setModalView] = useState({});

    const modalHandle = (product) => {
        setModalView(productsData.find(el => el.id === product.id))
    }

    return (
        <>
            {productsData.map(product => (
                <Product key={product.id} product={product} modalHandle={modalHandle} modalView={modalView} />
            ))}
        </>
    )
}
export default ProductsList;