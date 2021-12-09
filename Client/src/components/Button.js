import React from "react";

const MyComponent = ({ children, secondBtn, thirdBtn }) => {
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
      >
        {children}
      </button>
    </>
  );
};

export default MyComponent;
