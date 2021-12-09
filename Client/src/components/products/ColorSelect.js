import React from "react";

const ColorSelect = ({ colorData }) => {
  return (
    <div className={"color-select"}>
      <ul className={"d-flex text-center"}>
        <li>
          <label htmlFor="radio1">
            <input
              type="radio"
              name="color-img"
              id="radio1"
              defaultChecked
              value={colorData.variation_0_color}
              className={"color-select__radio"}
            />
            <img
              className={
                colorData.variation_0_thumbnail === ""
                  ? ""
                  : "color-select__img"
              }
              src={colorData.variation_0_thumbnail}
              alt=""
            />
            <p className={"color-select__name"}>
              {colorData.variation_0_color}
            </p>
          </label>
        </li>
        <li className={"ps-5"}>
          <label htmlFor="radio2">
            <input
              type="radio"
              name="color-img"
              id="radio2"
              value={colorData.variation_1_color}
              className={"color-select__radio"}
            />
            <img
              className={
                colorData.variation_1_thumbnail === ""
                  ? ""
                  : "color-select__img"
              }
              src={colorData.variation_1_thumbnail}
              alt=""
            />
            <p className={"color-select__name"}>
              {colorData.variation_1_color}
            </p>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default ColorSelect;
