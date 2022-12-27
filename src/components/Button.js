import React from "react";

const Button = ({ children, secondBtn, thirdBtn, onClick }) => {
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
        type={"button"}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
