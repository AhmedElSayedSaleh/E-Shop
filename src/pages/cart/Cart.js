import React from "react";
import { Icon } from "../../components";

const Cart = () => {
  return (
    <div className=" pt-5 mt-5">
      <div className="container">
        <div className="row justify-content-center align-items-center py-5 my-5">
          <div className="col">
            <h3>Shopping Cart</h3>
          </div>
          <div className="col">
            <div className=" d-flex justify-content-end">
              <Icon
                icon="cart"
                size={"1.7rem"}
                className={"mx-3 mx-lg-4 menu__icon"}
                disableFill
              />
              <span style={{ width: "70px" }}>
                <hr></hr>
              </span>
              <Icon
                icon="delivery"
                size={"1.7rem"}
                className={"mx-3 mx-lg-4 menu__icon"}
                disableFill
              />
            </div>
          </div>
        </div>

        <div className="row justify-content-center align-items-center g-2">
          <div className="table-responsive">
            <table className="table table-borderless">
              <thead>
                <tr>
                  <th>Column 1</th>
                  <th>Column 2</th>
                  <th>Column 3</th>
                  <th>Column 1</th>
                  <th>Column 2</th>
                  <th>Column 3</th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td>R1C1</td>
                  <td>R1C2</td>
                  <td>R1C3</td>
                  <td>R1C1</td>
                  <td>R1C2</td>
                  <td>R1C3</td>
                </tr>
                <tr className="">
                  <td>Item</td>
                  <td>Item</td>
                  <td>Item</td>
                  <td>Item</td>
                  <td>Item</td>
                  <td>Item</td>
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

        <div className="row justify-content-center align-items-center g-2">
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
