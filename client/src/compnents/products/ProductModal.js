import React from 'react';
import Button from "../Button";

// import "../../styles/components/prodact-modal.scss";

const ProductModal = ({modalView}) => {
    console.log(modalView)

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
                <div className="container-fluid py-4">
                    <div className="row">
                        <div className="col-6">
                                <div>
                                    <img className={'w-100 product__head__img'} src={modalView.image_url} alt={modalView.name}/>
                                </div>
                        </div>
                        <div className="col-6">
                            <div>
                                <div className={'d-flex justify-content-end'}>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                                </div>
                                <h2 className="modal-title" id="exampleModalLabel">{modalView.name}</h2>
                                <h4>Model: {modalView.model}</h4>
                                <a href={modalView.url}>View full details</a>
                                <p>{modalView.current_price} <span>{modalView.currency}</span></p>
                                <div>
                                    <p>Color: {modalView.variation_0_color} {modalView.variation_1_color}</p>
                                    <ul className={'d-flex'}>
                                        <li>
                                            <img src={modalView.variation_0_thumbnail} alt=""/>
                                        </li>
                                        <li>
                                            <img src={modalView.variation_1_thumbnail} alt=""/>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <Button children={'ADD TO CART'} />
                            </div>
                        </div>
                    </div>
                </div>
                {/*<div className="modal-header">*/}
                {/*    <h5 className="modal-title" id="exampleModalLabel">{modalView.name}</h5>*/}
                {/*    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>*/}
                {/*</div>*/}
                {/*<div className="modal-body">*/}
                {/*    <img className={'w-100 product__head__img'} src={modalView.image_url} alt={modalView.name}/>*/}
                {/*</div>*/}
                {/*<div className="modal-footer">*/}
                {/*    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>*/}
                {/*    <button type="button" className="btn btn-primary">Save changes</button>*/}
                {/*</div>*/}
            </div>
        </div>
    </div>
    );
}

export default ProductModal;