import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Input } from "../../components";

const Register = () => {
  return (
    <div className="container my-3 py-5">
      <div className="row">
        <div>
          <Link to={"/products"} className="text-black" role="button">
            <div className="d-inline-block">
              <Icon icon="arrow-left" size={"1.3rem"} disableFill />
            </div>
            <p className="mb-0 ps-5 d-inline-block">Back to store</p>
          </Link>
        </div>
      </div>
      <div className="row align-items-center flex-column text-center pt-5 px-5 mx-5 mt-5">
        {/* <div className="d-flex "> */}
        <div className="w-50">
          <h2 className="m-auto" style={{ fontSize: "2.2rem", width: "70%" }}>
            Create an account and discover the benefits
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        {/* </div> */}
      </div>
      <div className="row justify-content-center align-items-center">
        <div className="w-50">
          <form>
            <div className="mb-3">
              <Input type={"text"} placeholder={"First Name"} />
            </div>
            <div className="mb-3">
              <Input type={"text"} placeholder={"Last Name"} />
            </div>
            <div className="mb-3">
              <Input type={"email"} placeholder={"Email"} />
            </div>
            <div className="mb-3">
              <Input type={"password"} placeholder={"Password"} />
            </div>
            <div className="my-4 form-check">
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
                I agree to the Google Terms of Service and Privacy Policy
              </label>
            </div>
            <Button
              children={"Sign up"}
              type={"submit"}
              onClick={(e) => console.log(e)}
              style={{
                width: "100%",
                textTransform: "none",
                margin: "3rem 0 0 0",
              }}
            />
          </form>
          <div className="text-center my-4">
            <Link
              to={"/login"}
              className="text-black"
              role="button"
              style={{ fontSize: "1.3rem" }}
            >
              Are you already a member?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
