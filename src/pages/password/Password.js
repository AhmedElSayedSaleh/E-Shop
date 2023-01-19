import React from "react";
import { Link } from "react-router-dom";
import { Button, GoBackLink, Icon, Input } from "../../components";

function Password() {
  return (
    <div className="container my-3 py-5">
      <div className="row">
        <GoBackLink location="products" children={"Back to store"} />

        {/* <div>
          <Link to={"/products"} className="text-black" role="button">
            <div className="d-inline-block">
              <Icon icon="arrow-left" size={"1.3rem"} disableFill />
            </div>
            <p className="mb-0 ps-5 d-inline-block">Back to store</p>
          </Link>
        </div> */}
      </div>
      <div className="row align-items-center flex-column text-center pt-5 px-5 mx-5 mt-5">
        {/* <div className="d-flex "> */}
        <div className="w-50">
          <h2 className="m-auto" style={{ fontSize: "2.2rem", width: "70%" }}>
            Forgot your password?
          </h2>
        </div>
        <div className="w-75 d-flex justify-content-center">
          <p
            className="p-5"
            style={{
              fontSize: "1.3rem",
              lineHeight: "2.5rem",
              color: "#7d7d7d",
              width: "60%",
            }}
          >
            Enter your email or phone number and recover your account
          </p>
        </div>
        {/* </div> */}
      </div>
      <div className="row justify-content-center align-items-center">
        <div className="w-50">
          <form>
            <div className="mb-3">
              <Input type={"email"} placeholder={"Email"} />
            </div>
            <div className="mb-3 d-flex justify-content-between">
              <hr style={{ width: "33%" }}></hr>
              <span style={{ fontSize: "1.3rem", color: "#bebebe" }}>OR</span>
              <hr style={{ width: "33%" }}></hr>
            </div>
            <div className="mb-3">
              <Input type={"tel"} placeholder={"Phone number"} />
            </div>
            <Button
              children={"Reset password"}
              type={"submit"}
              onClick={(e) => console.log(e)}
              style={{
                width: "100%",
                textTransform: "none",
                margin: "3rem 0 0 0",
              }}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Password;
