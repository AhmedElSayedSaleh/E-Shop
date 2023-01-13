import React from "react";
import { Icon } from "./";

const Button = ({ children, secondBtn, thirdBtn, onClick, type, style }) => {
  return (
    <>
      <button
        className={
          secondBtn
            ? "main-btn main-btn--second-theme"
            : thirdBtn
            ? "main-btn main-btn--third-theme"
            : "main-btn"
        }
        type={type}
        onClick={onClick}
        style={style}
      >
        {children === "Facebook" ? (
          <div className="d-flex justify-content-evenly">
            <Icon icon="Facebook" size={"1.7rem"} />
            {children}
          </div>
        ) : children === "Gmail" ? (
          <div className="d-flex justify-content-evenly">
            <Icon icon="gmail" size={"1.7rem"} />
            {children}
          </div>
        ) : (
          children
        )}
      </button>
    </>
  );
};

export default Button;
