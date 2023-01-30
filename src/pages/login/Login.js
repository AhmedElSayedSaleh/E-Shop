import React from "react";
import { Link } from "react-router-dom";
import { Button, GoBackLink, Input } from "../../components";

const Login = () => {
  return (
    <div className="container my-3 py-5">
      <div className="row">
        <GoBackLink location="/products" children={"Back to store"} />
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
        <div className="col">
          <h2 className="m-auto" style={{ fontSize: "2.2rem", width: "70%" }}>
            Log in
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </div>
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-sm-9 col-lg-6 col-xl-5">
          <form>
            <div className="mb-3">
              <Input type={"email"} placeholder={"Email"} />
            </div>
            <div className="mb-3">
              <Input type={"password"} placeholder={"Password"} />
            </div>
            <div className="row my-4">
              <div className="col-6">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="exampleCheck1"
                    style={{ fontSize: "1.3rem" }}
                  >
                    Keep me signed in
                  </label>
                </div>
              </div>
              <div className="col-6 text-end">
                <Link
                  to={"/password"}
                  role="button"
                  style={{ fontSize: "1.3rem", color: "#808080" }}
                >
                  Forgot password?
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-7 col-sm-6 mx-auto">
                <Button
                  children={"Facebook"}
                  type={"button"}
                  onClick={(e) => console.log(e)}
                  style={{
                    width: "100%",
                    textTransform: "none",
                    margin: "0 0",
                    backgroundColor: "#3b5998",
                    color: "#ffffff",
                    border: "solid 1px #3b5998",
                  }}
                />
              </div>
              <div className="col-7 col-sm-6 mx-auto pt-3 pt-sm-0">
                <Button
                  children={"Gmail"}
                  type={"button"}
                  onClick={(e) => console.log(e)}
                  style={{
                    width: "100%",
                    textTransform: "none",
                    margin: "0 0",
                    backgroundColor: "#ffffff",
                    border: "solid 1px #f1584d",
                  }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12 mx-auto">
                <Button
                  children={"Sign in"}
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
          <div className="text-center my-4" style={{ fontSize: "1.3rem" }}>
            <span>Not a member yet?</span>
            <Link
              to={"/register"}
              className="text-black ps-5 text-decoration-underline"
              role="button"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
