import React from "react";
// import { setFiltered } from "../store/actions/productActions";

const FiltersNav = ({ subcategories, handleChecked }) => {
  return (
    <div className="accordion filter-nav" id="accordionPanelsStayOpenExample">
      <div className="accordion-item filter-nav__item filter-nav__item">
        <h2
          className="accordion-header filter-nav__item__header"
          id="panelsStayOpen-headingOne"
        >
          <button
            className="accordion-button text-uppercase filter-nav__item__header__btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseOne"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseOne"
          >
            product type (subcategory)
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="panelsStayOpen-headingOne"
        >
          <div className="accordion-body filter-nav__item__body">
            {subcategories.map((subcategory, index) => {
              return (
                <div
                  className="form-check filter-nav__item__body__check"
                  key={index}
                >
                  <input
                    className="form-check-input filter-nav__item__body__check__input"
                    type="checkbox"
                    value={subcategory}
                    id={`subcategory${index}`}
                    onChange={(event) => handleChecked(event)}
                  />
                  <label
                    className="form-check-label h5 filter-nav__item__body__check__label"
                    htmlFor={`subcategory${index}`}
                  >
                    {subcategory}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="accordion-item filter-nav__item">
        <h2
          className="accordion-header filter-nav__item__header"
          id="panelsStayOpen-headingTwo"
        >
          <button
            className="accordion-button text-uppercase filter-nav__item__header__btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseTwo"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseTwo"
          >
            price
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseTwo"
          className="accordion-collapse collapse show"
          aria-labelledby="panelsStayOpen-headingTwo"
        >
          <div className="accordion-body filter-nav__item__body">
            <label htmlFor="customRange1" className="form-label">
              range 1
            </label>
            <label htmlFor="customRange2" className="form-label">
              range 2
            </label>
            <input type="range" className="form-range" id="customRange1" />
            <input type="range" className="form-range" id="customRange2" />
          </div>
        </div>
      </div>
      {/* <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingThree">
          <button
            className="accordion-button text-uppercase"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseThree"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseThree"
          >
            color
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseThree"
          className="accordion-collapse collapse show"
          aria-labelledby="panelsStayOpen-headingThree"
        >
          <div className="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default FiltersNav;
