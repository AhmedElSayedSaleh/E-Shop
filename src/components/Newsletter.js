import React from "react";
import { Button, Input } from "./";
import { newsletterBg } from "../assets/images";

const Newsletter = () => {
  return (
    <div
      className="newsletter"
      style={{ backgroundImage: `url(${newsletterBg})`, height: "240px" }}
    >
      <div className="d-flex align-items-center newsletter__overlay">
        <div className="row w-100">
          <div className="col-lg-2">
            <div className="newsletter__discount d-flex align-items-center justify-content-center">
              <span>-10%</span>
            </div>
          </div>
          <div className="col-lg-4">
            <p className="newsletter__desc">
              Subscribe to our newsletter and receive exclusive offers every
              week
            </p>
          </div>
          <div className="col-lg-3">
            <Input type={"text"} placeholder={"Enter your email"} />
          </div>
          <div className="col-lg-3">
            <div className="newsletter__btn">
              <Button children={"get your discount"} type={"button"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
