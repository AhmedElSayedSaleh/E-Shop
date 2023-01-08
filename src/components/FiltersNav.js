import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
// import { setFiltered } from "../store/actions/productActions";

const FiltersNav = ({
  subcategories,
  handleChecked,
  handleChange,
  minPrice,
  maxPrice,
}) => {
  // const [prices, setPrices] = useState([]);
  // const [minPrice, setMinPrice] = useState(0);
  // const [maxPrice, setMaxPrice] = useState(100);

  // useEffect(() => {
  // let pricesList = [];
  // filteredProducts.map((item) => pricesList.push(item.current_price));
  // setPrices(pricesList);
  // setMinPrice(Math.ceil(Math.min(...pricesList)));
  // setMaxPrice(Math.ceil(Math.max(...pricesList)));
  // }, [filteredProducts, minPrice, maxPrice]);

  // console.log(minPrice, maxPrice);

  // const handleChange = (e) => {
  //   console.log(e);
  // };

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
                  className="form-check filter-nav__item__body__subcategory-check"
                  key={index}
                >
                  <input
                    className="form-check-input filter-nav__item__body__subcategory-check__input"
                    type="checkbox"
                    value={subcategory}
                    id={`subcategory${index}`}
                    onChange={(event) => handleChecked(event)}
                  />
                  <label
                    className="form-check-label h5 filter-nav__item__body__subcategory-check__label"
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
            <div className="filter-nav__item__body__price-range">
              <div className="d-flex justify-content-between filter-nav__item__body__price-range__labels">
                <span className="filter-nav__item__body__price-range__labels__label">
                  {minPrice} USD
                </span>
                <span className="filter-nav__item__body__price-range__labels__label">
                  {maxPrice} USD
                </span>
              </div>
              <div className="w-75 m-auto">
                <Slider
                  range
                  min={0}
                  max={100}
                  allowCross={false}
                  defaultValue={[minPrice, maxPrice]}
                  onChange={(e) => handleChange(e)}
                  railStyle={{ height: "3px" }}
                  trackStyle={[{ backgroundColor: "#000", height: "3px" }]}
                  handleStyle={[
                    { borderColor: "#000", transform: "translateX(-90%)" },
                    { borderColor: "#000", transform: "translateX(-10%)" },
                  ]}
                />
              </div>
              {/* <label htmlFor="minRange" className="form-label">
                min range
              </label>
              <label htmlFor="maxRange" className="form-label">
                max range
              </label>
              <input
                type="range"
                className="form-range thumb thumb--zindex-3"
                id="minRange"
                min={0}
                max={100}
                // value={minVal}
              />
              <input
                type="range"
                className="form-range thumb thumb--zindex-4"
                id="maxRange"
                min={0}
                max={100}
                // value={maxVal}
              /> */}
            </div>
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
