import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button, Icon } from "../../components";
import { Quantity } from "../../components/products";
import { removeFromCart } from "../../store/slices/CartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalCost = useSelector((state) => state.cart.totalCost);

  const dispatch = useDispatch();

  const handleRemoveFromCart = useCallback(
    (item) => dispatch(removeFromCart(item)),
    [dispatch]
  );

  const navigate = useNavigate();

  return (
    <div className="pb-5 cart">
      <div className="container">
        <div className="row justify-content-center align-items-center py-5 mb-5 cart__head">
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
          {cartItems.length === 0 ? (
            <div className="col-12 text-center my-5 py-5 text-danger">
              <h3 className="cart__empty">Your cart is empty</h3>
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table table-borderless cart__table">
                <thead className="cart__table__head">
                  <tr className="text-center">
                    <th className="text-start">Product</th>
                    <th>Color</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="cart__table__body">
                  {cartItems.map((item) => (
                    <tr
                      className="align-middle text-center cart__table__body__row"
                      key={item.productId}
                    >
                      <td>
                        <div className="d-flex align-items-center">
                          <img src={item.primaryImage} alt={item.name} />
                          <div className="text-start ps-5">
                            <h4>{item.name}</h4>
                            <p className="cart__table__body__row__id">
                              {item.model}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td>white</td>
                      <td>
                        <div className=" d-flex justify-content-center">
                          <Quantity
                            cartItemQuantity={item.quantity}
                            item={item}
                          />
                        </div>
                      </td>
                      <td>${item.totalPrice.toFixed(2)}</td>
                      <td>
                        <div className="">
                          <Icon
                            icon="CANCEL"
                            size={"1.2rem"}
                            disableFill
                            role="button"
                            onClick={() => handleRemoveFromCart(item)}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="row justify-content-center align-items-center mt-5 cart__check">
          <div className="col-4 cart__check__continue">
            <Link
              onClick={() => navigate(-1)}
              className="mb-0 text-black d-flex align-items-center w-50"
              role="button"
            >
              <div className="pe-3 cart__check__continue__icon">
                <Icon icon="arrow-left" size={"1.3rem"} disableFill />
              </div>
              Continue Shopping
            </Link>
          </div>
          <div className="col-4">
            <input className="" type="text" placeholder="Promo Code" />
          </div>
          <div className="col-2 d-flex justify-content-between cart__check__total">
            <p className=" mb-0 cart__check__total__title">Total cost</p>
            <p className=" mb-0 cart__check__total__value">
              ${totalCost.toFixed(2)}
            </p>
          </div>
          <div className="col-2">
            <Button children={"CHECKOUT"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
