import React from "react";
import { Button, GoBackLink, Input } from "../../components";

function Password() {
  return (
    <div className="container my-3 py-5">
      <div className="row">
        <GoBackLink location="/products" children={"Back to store"} />
      </div>
      <div className="row align-items-center flex-column text-center pt-5 px-5 mx-5 mt-5">
        <div className="col">
          <h2 className="m-auto" style={{ fontSize: "2.2rem" }}>
            Forgot your password?
          </h2>
        </div>
        <div className="col-md-8 col-lg-6">
          <p
            className="py-5 px-lg-5"
            style={{
              fontSize: "1.3rem",
              lineHeight: "2.5rem",
              color: "#7d7d7d",
            }}
          >
            Enter your email or phone number and recover your account
          </p>
        </div>
      </div>
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-sm-9 col-lg-6">
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
            <div className="row">
              <div className="col-12 mx-auto">
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
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Password;
