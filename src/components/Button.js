import React from "react";

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
        {children}
      </button>
    </>
  );
};

export default Button;
