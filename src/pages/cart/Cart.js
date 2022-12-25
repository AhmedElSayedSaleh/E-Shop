import React from "react";
import { Button, Icon } from "../../components";
import { Quantity } from "../../components/products";

const Cart = () => {
  return (
    <div className="py-5 cart">
      <div className="container">
        <div className="row justify-content-center align-items-center py-5 my-5 cart__head">
          <div className="col">
            <h3 className="cart__head__title">Shopping Cart</h3>
          </div>
          <div className="col">
            <div className=" d-flex justify-content-end align-items-center">
              <div className="d-flex align-items-center justify-content-center cart__head__icon cart__head__icon--cart">
                <Icon icon="cart" size={"1.7rem"} disableFill />
              </div>
              <span className="cart__head__line"></span>
              <div className="d-flex align-items-center justify-content-center cart__head__icon cart__head__icon--delivery">
                <Icon icon="delivery" size={"1.7rem"} disableFill />
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center align-items-center">
          <div className="table-responsive">
            <table className="table table-borderless cart__table">
              <thead className="cart__table__head">
                <tr className="text-center">
                  <th className="text-start">Product</th>
                  <th>Color</th>
                  <th>Amount</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="cart__table__body">
                <tr className="align-middle text-center cart__table__body__row">
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="https://imgaz1.chiccdn.com/thumb/list_grid/oaupload/newchic/images/4B/90/7bf3cce7-803e-4f11-b7cb-5dff0fbc4147.jpg"
                        alt=""
                      />
                      <div className="m-auto text-start">
                        <h4 className="m-auto text-start">
                          Boucles d'oreilles triangle en pierre du Labrador
                        </h4>
                        <p className="cart__table__body__row__id">SKUA50478</p>
                      </div>
                    </div>
                  </td>
                  <td>white</td>
                  <td>
                    <div className=" d-flex justify-content-center">
                      <Quantity />
                    </div>
                  </td>
                  <td>$9.99</td>
                  <td>
                    <div className="">
                      <Icon
                        icon="CANCEL"
                        size={"1.2rem"}
                        disableFill
                        role="button"
                      />
                    </div>
                  </td>
                </tr>
                <tr></tr>
                <tr className="align-middle text-center cart__table__body__row">
                  <td>
                    <div className="d-flex">
                      <img
                        src="https://imgaz1.chiccdn.com/thumb/list_grid/oaupload/newchic/images/C5/EA/bd0cf14c-568c-4daf-9860-78a125c8224f.jpg"
                        alt=""
                      />
                      <div className="m-auto text-start">
                        <h4 className="m-auto text-start">
                          Anneau de minerai de cristal naturel irrégulier
                        </h4>
                        <p className="cart__table__body__row__id">SKUA50478</p>
                      </div>
                    </div>
                  </td>
                  <td>Item</td>
                  <td>
                    <div className=" d-flex justify-content-center">
                      <Quantity />
                    </div>
                  </td>
                  <td>Item</td>
                  <td>
                    <div className="">
                      <Icon
                        icon="CANCEL"
                        size={"1.2rem"}
                        disableFill
                        role="button"
                      />
                    </div>
                  </td>
                </tr>
                <tr className="align-middle text-center cart__table__body__row">
                  <td>
                    <div className="d-flex">
                      <img
                        src="https://imgaz1.chiccdn.com/thumb/list_grid/oaupload/newchic/images/A8/8B/7208ae7f-1507-4d42-b06a-192facf1f4a2.jpg"
                        alt=""
                      />
                      <div className="m-auto text-start">
                        <h4 className="m-auto text-start">
                          Boucles d'oreilles triangle en pierre du Labrador
                        </h4>
                        <p className="cart__table__body__row__id">SKUA50478</p>
                      </div>
                    </div>
                  </td>
                  <td>Item</td>
                  <td>
                    <div className=" d-flex justify-content-center">
                      <Quantity />
                    </div>
                  </td>
                  <td>Item</td>
                  <td>
                    <div className="">
                      <Icon
                        icon="CANCEL"
                        size={"1.2rem"}
                        disableFill
                        role="button"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div> */}
        </div>

        <div className="row justify-content-center align-items-center mt-5 cart__check">
          <div
            className="col-4 d-flex align-items-center cart__check__continue"
            role="button"
          >
            <div className="cart__check__continue__icon">
              <Icon icon="arrow-left" size={"1.3rem"} disableFill />
            </div>
            <h5 className="ps-4 mb-0">Continue Shopping</h5>
          </div>
          <div className="col-4">
            <input className="" type="text" placeholder="Promo Code" />
          </div>
          <div className="col-2 d-flex justify-content-between cart__check__total">
            <p className=" mb-0 cart__check__total__title">Total cost</p>
            <p className=" mb-0 cart__check__total__value">$159,99</p>
          </div>
          <div className="col-2">
            {" "}
            <Button children={"CHECKOUT"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
