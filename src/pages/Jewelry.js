import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// components
import { SingleProduct } from "../components/products";
import { LoadingBox, MessageBox, FiltersNav, Newsletter } from "../components";

import { fetchJewelry } from "../store/slices/JewelrySlice";

const Jewelry = () => {
  const dispatch = useDispatch();
  const [filteredProducts, setFilteredProducts] = useState([]);

  const jewelryList = useSelector((state) => state.jewelryProducts);
  const { loading, error, data } = jewelryList;

  const [modalView, setModalView] = useState({});

  let [checked, setChecked] = useState([]);
  const subcategories = [];

  useEffect(() => {
    dispatch(fetchJewelry());
  }, [dispatch]);

  useEffect(() => {
    if (data && data.length > 0) {
      setFilteredProducts(data);
    }
  }, [data]);

  if (Array.isArray(data)) {
    data.map((product) =>
      subcategories.indexOf(product.subcategory) === -1
        ? subcategories.push(product.subcategory)
        : null
    );
  }

  const modalHandle = (product) => {
    setModalView(product);
  };

  // Filter Nav subcategories check
  const handleChecked = (event) => {
    if (event.target.checked) {
      if (checked.length === 0) {
        setFilteredProducts(
          data.filter((product) => product.subcategory === event.target.value)
        );
      } else {
        setFilteredProducts(
          filteredProducts.concat(
            data.filter((product) => product.subcategory === event.target.value)
          )
        );
      }
      checked = [...checked, event.target.value];
    } else {
      checked.splice(checked.indexOf(event.target.value), 1);
      if (checked.length === 0) {
        setFilteredProducts(data);
      } else {
        setFilteredProducts(
          filteredProducts.filter(
            (product) => product.subcategory !== event.target.value
          )
        );
      }
    }
    setChecked(checked);
  };

  console.log(filteredProducts);
  return (
    <div className={"container pt-5"}>
      <div className={"row"}>
        <div className="col-lg-3 mt-4">
          <FiltersNav
            subcategories={subcategories}
            handleChecked={handleChecked}
          />
        </div>
        <div className="col-lg-9">
          <div className="row">
            {loading ? (
              <LoadingBox />
            ) : error ? (
              <MessageBox>{error}</MessageBox>
            ) : (
              filteredProducts &&
              filteredProducts.map((item) => {
                let product = {
                  brand: item.brand,
                  brandUrl: item.brand_url,
                  category: item.category,
                  codCountry: item.codCountry,
                  currency: item.currency,
                  rawPrice: item.raw_price,
                  discount: item.discount,
                  productId: item.id,
                  primaryImage: item.image_url,
                  isNew: item.is_new,
                  likesCount: item.likes_count,
                  model: item.model,
                  name: item.name,
                  currentPrice:
                    item.current_price !== null
                      ? item.current_price
                      : item.raw_price,
                  subcategory: item.subcategory,
                  url: item.url,
                  variationColor1: item.variation_0_color,
                  variationImage1: item.variation_0_image,
                  variationThumbnail1: item.variation_0_thumbnail,
                  variationColor2: item.variation_1_color,
                  variationImage2: item.variation_1_image,
                  variationThumbnail2: item.variation_1_thumbnail,
                };
                return (
                  <div
                    key={product.productId}
                    className="col-lg-4 col-sm-6 my-4"
                  >
                    <SingleProduct
                      product={product}
                      modalHandle={modalHandle}
                      modalView={modalView}
                    />
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
      <div className="row">
        <Newsletter />
      </div>
    </div>
  );
};

export default Jewelry;
