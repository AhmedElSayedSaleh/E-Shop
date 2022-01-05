import React from "react";
// import { setFiltered } from "../store/actions/productActions";

const FiltersNav = ({ subcategories, dataType }) => {
  // const bags = useSelector((state) => state.bags.products);
  // const shoes = useSelector((state) => state.shoes.products);
  // const jewelry = useSelector((state) => state.jewelry.products);
  // const productsFiltered = useSelector((state) => state.productsFiltered);

  // const dispatch = useDispatch();

  // let productsContainer = [];
  // if (dataType === "bags") {
  //   productsContainer = bags;
  // } else if (dataType === "shoes") {
  //   productsContainer = shoes;
  // } else if (dataType === "jewelry") {
  //   productsContainer = jewelry;
  // }

  // const subcategoriesCheckbox = document.querySelectorAll(".form-check-input");

  // const handleOnChange = () => {
  //   subcategoriesCheckbox.forEach((ele) => {
  //     if (ele.checked) {
  //       const productsUpdated = productsContainer.filter(
  //         (elem) => elem.subcategory === ele.value
  //       );
  //       console.log(productsUpdated);
  //       dispatch(setFiltered(bags));
  //     }
  //     // ele.checked ? console.log(ele.value) : console.log("sss");
  //   });
  // };

  return (
    <div className="accordion" id="accordionPanelsStayOpenExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
          <button
            className="accordion-button text-uppercase"
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
          <div className="accordion-body">
            {subcategories.map((subcategory, index) => {
              return (
                <div className="form-check" key={index}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id={`subcategory${index}`}
                  />
                  <label
                    className="form-check-label h5"
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
      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
          <button
            className="accordion-button text-uppercase"
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
          <div className="accordion-body">
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
