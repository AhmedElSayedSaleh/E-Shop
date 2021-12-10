import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../";
import { ColorSelect, Quantity } from "./";

const ProductModal = ({ modalView }) => {
  // console.log(modalView);
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="container-fluid py-4">
            <div className="row">
              <div className="col-6 d-flex align-items-center">
                <img
                  className={"w-100 product__head__img"}
                  src={modalView.primaryImage}
                  alt={modalView.name}
                />
              </div>
              <div className="col-6">
                <div>
                  <div className={"d-flex justify-content-end"}>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <h2 className="modal-title" id="exampleModalLabel">
                    {modalView.name}
                  </h2>
                  <div className={"d-flex py-4"}>
                    <Link
                      className={"product-modal__link"}
                      onClick={() => {
                        const body = document.body;
                        document.querySelector(".modal-backdrop").remove();
                        body.classList.remove("modal-open");
                        body.style.overflow = "auto";
                        body.style.paddingRight = 0;
                      }}
                      to={`/product/${modalView.productId}`}
                      aria-label="Close"
                    >
                      <p>View full details</p>
                    </Link>
                  </div>
                  <div className={"d-flex"}>
                    <p>Price: </p>
                    <p className={"ps-3 product-modal__price"}>
                      {modalView.currentPrice}
                    </p>
                    <span className={"ps-2 product-modal__currency"}>$</span>
                  </div>
                  <ColorSelect colorData={modalView} />
                </div>
                <div className={"d-flex justify-content-center"}>
                  <Quantity />
                  <Button children={"ADD TO CART"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
