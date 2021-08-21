import React from 'react';
import Icon from "../Icons";
import Modal from "./Modal";

import '../../styles/components/product.scss';

const Product = ({product, modalHandle, modalView}) => {
    return (
        <div className={'col-xl-3 col-lg-4 col-sm-6 mt-3 product'}>
            <div className={'px-3 product__inner'}>
            <div className={'product__head'}>
                <a href={product.url}>
                    <img className={'w-100 product__head__img'} src={product.image_url} alt={product.name}/>
                </a>
                <span className={product.discount !== 0 ? 'product__head__discount' : 'd-none'}>{product.discount}%</span>
                <span className={product.is_new ? 'product__head__new' : 'd-none'}>NEW</span>
                <div className={'w-100 d-flex justify-content-center'}>
                    <button type={"button"} className={'btn px-5 d-none product__btn'} onClick={() => modalHandle(product)} data-bs-toggle="modal" data-bs-target="#exampleModal">QUICK SHOP</button>
                </div>
                {/*modal>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> here*/}
                    <Modal modalView={modalView}/>

            </div>
            <div className={'product__body py-3'}>
                <p className={'product__body__title'}>{product.name}</p>
                <div className={'d-flex justify-content-between'}>
                    <div className={'d-flex justify-content-evenly product__body__price'}>
                        <span className={'d-inline-block pe-5 product__body__price__current'}>${product.current_price}</span>
                        <span className={product.discount !== 0 ? 'text-decoration-line-through product__body__price__raw' : 'd-none'}>${product.raw_price}</span>
                    </div>
                    <div className={'product__body__likes'}>
                        <Icon icon="heart" size={"2rem"} className={'me-3 product__body__likes__icon'} />
                        <span className={'product__body__likes__count'}>({product.likes_count})</span>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Product;
