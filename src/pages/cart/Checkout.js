import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, CartHeader, GoBackLink, Input } from "../../components";

function Checkout() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalCost = useSelector((state) => state.cart.totalCost);

  return (
    <div className="container">
      <CartHeader title={"Shipping and Payment"} checkoutIcon />

      <div className="row">
        <div className="col-6">
          <div>
            <Link to={"/login"}>
              <Button
                children={"LOG IN"}
                type={"button"}
                style={{
                  padding: "1.5rem 3.5rem",
                  marginLeft: "0",
                }}
              />
            </Link>
            <Link to={"/register"}>
              <Button
                children={"SIGN UP"}
                type={"button"}
                style={{
                  backgroundColor: "transparent",
                  border: "solid 1px #d8d8d8",
                  padding: "1.5rem 3.5rem",
                  marginRight: "0",
                }}
              />
            </Link>
          </div>
          <div className="pt-5 mt-2">
            <p className="mb-5" style={{ fontSize: "1.4rem" }}>
              Shipping information
            </p>

            <form>
              <div className="row">
                <div className="col-6">
                  <div className="mb-4">
                    <Input type={"email"} placeholder={"Email"} />
                  </div>
                  <div className="mb-4">
                    <Input type={"text"} placeholder={"First Name"} />
                  </div>
                  <div className="mb-4">
                    <Input type={"text"} placeholder={"Last name"} />
                  </div>
                  <div className="mb-4">
                    <Input type={"tel"} placeholder={"Phone number"} />
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-4">
                    <Input type={"text"} placeholder={"Address"} />
                  </div>
                  <div className="mb-4">
                    <Input type={"text"} placeholder={"City"} />
                  </div>
                  <div className="mb-4">
                    <Input type={"text"} placeholder={"Postal Code / ZIP"} />
                  </div>
                  <div className="mb-4">
                    <Input type={"text"} placeholder={"Country"} />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="col-6 ps-5">
          <div className="ms-3 ps-5">
            <p style={{ fontSize: "1.4rem", marginBottom: "2.8rem" }}>
              Your cart
            </p>

            <div
              className="overflow-auto main-scroll"
              style={{ maxHeight: "40vh" }}
            >
              {cartItems.map((item) => (
                <div className="pe-2 mb-5" key={item.productId}>
                  <div className="col-12">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <img
                          src={item.primaryImage}
                          alt={item.name}
                          style={{ width: "5.1rem", borderRadius: "50%" }}
                        />
                        <div className="text-start ps-5">
                          <h4 className="mb-0" style={{ width: "80%" }}>
                            {item.name}
                          </h4>
                          <p className="mb-0 cart__table__body__row__id">
                            {item.model}
                          </p>
                        </div>
                      </div>
                      <div>${item.totalPrice.toFixed(2)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="d-flex justify-content-between w-50 m-auto mt-5 "
              style={{
                backgroundColor: "#f1f1f1",
                padding: "1.5rem 4rem",
                borderRadius: "3rem",
              }}
            >
              <p className="mb-0" style={{ fontWeight: "300" }}>
                Total cost
              </p>
              <p className="mb-0" style={{ fontWeight: "600" }}>
                ${totalCost.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="d-flex justify-content-between mt-5 pt-5">
          <GoBackLink location={"/cart"} children={"Back"} />
          <div>
            <Link to={"/products"}>
              <p className="mb-0 d-inline-block">
                <Button
                  children={"Continue shopping"}
                  type={"button"}
                  style={{
                    backgroundColor: "transparent",
                    border: "solid 1px #d8d8d8",
                  }}
                />
              </p>
            </Link>
            <Link to={""}>
              <p className="mb-0 d-inline-block">
                <Button children={"Proceed to payment"} type={"button"} />
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;