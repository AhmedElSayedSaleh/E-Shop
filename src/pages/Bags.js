import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import axios from "axios";
import { SingleProduct } from "../components/products";
import { LoadingBox, MessageBox, FiltersNav, Newsletter } from "../components";
import BagProduct from "../components/products/BagProduct";

const Bags = () => {
  const bags = useSelector((state) => state.bags.products);

  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  // const [modalView, setModalView] = useState({});

  // const fetchProducts = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       "https://mocki.io/v1/c2b9a068-ebec-4b92-b5b7-39a1247ae1c6"
  //     );
  //     setLoading(false);
  //     setProducts(data.bags);
  //     // console.log(data.bags);
  //   } catch (err) {
  //     setError(err.message);
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   setLoading(true);
  //   fetchProducts();
  // }, []);

  // bags.map((product) => {
  //   if (subcategories.indexOf(product.subcategory) === -1) {
  //     subcategories.push(product.subcategory);
  //   }
  // });
  const subcategories = [];

  bags.map((product) =>
    subcategories.indexOf(product.subcategory) === -1
      ? subcategories.push(product.subcategory)
      : null
  );

  return (
    <div className={"container"}>
      <div className={"row"}>
        <div className="col-lg-3 mt-4">
          <FiltersNav subcategories={subcategories} />
        </div>
        <div className="col-lg-9">
          <div className="row">
            <BagProduct />

            {/* {
              loading ? (
                <LoadingBox />
              ) : error ? (
                <MessageBox>{error}</MessageBox>
              ) : (
              productsContainer
              )
            } */}
          </div>
        </div>
      </div>
      <div className="row">
        <Newsletter />
      </div>
    </div>
  );
};

export default Bags;
