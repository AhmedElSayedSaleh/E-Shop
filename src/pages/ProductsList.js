import React, { useState, useEffect } from "react";
import axios from "axios";
import { SingleProduct } from "../components/products";
import { LoadingBox, MessageBox, FiltersNav, Newsletter } from "../components";
import { Link } from "react-router-dom";

const ProductsList = () => {
  const [bags, setBags] = useState([]);
  const [shoes, setShoes] = useState([]);
  const [jewelry, setJewelry] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalView, setModalView] = useState({});

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        "https://mocki.io/v1/c2b9a068-ebec-4b92-b5b7-39a1247ae1c6"
      );
      setLoading(false);
      setBags(data.bags);
      setShoes(data.shoes);
      setJewelry(data.jewelry);

      // console.log(data.shoes);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchProducts();
  }, []);

  // let product = {
  //   brand: String,
  //   brandUrl: String,
  //   category: String,
  //   codCountry: String,
  //   currency: String,
  //   currentPrice: Number,
  //   discount: Number,
  //   productId: Number,
  //   primaryImage: String,
  //   isNew: Boolean,
  //   likesCount: Number,
  //   model: String,
  //   name: String,
  //   rawPrice: Number,
  //   subcategory: String,
  //   url: String,
  //   variationColor1: String,
  //   variationImage1: String,
  //   variationThumbnail1: String,
  //   variationColor2: String,
  //   variationImage2: String,
  //   variationThumbnail2: String,
  // };

  // const productsContainer = (products) => {

  // };

  return (
    <div className={"container"}>
      <div className={"row"}>
        <div className="col-lg-3 mt-4">
          <FiltersNav />
        </div>
        <div className="col-lg-9">
          {loading ? (
            <LoadingBox />
          ) : error ? (
            <MessageBox>{error}</MessageBox>
          ) : (
            <>
              <div className="row">
                {bags.slice(0, 8).map((item) => {
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

                  const modalHandle = (product) => {
                    setModalView((modalView) => product);
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
                })}

                <div className="col-lg-4 col-sm-6 my-4 d-flex align-items-center justify-content-center">
                  <Link to="/bags">
                    <p className="h2">See More</p>
                  </Link>
                </div>
              </div>

              <div className="row">
                {shoes.slice(0, 8).map((item) => {
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

                  const modalHandle = (product) => {
                    setModalView((modalView) => product);
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
                })}

                <div className="col-lg-4 col-sm-6 my-4 d-flex align-items-center justify-content-center">
                  <Link to="/shoes">
                    <p className="h2">See More</p>
                  </Link>
                </div>
              </div>

              <div className="row">
                {jewelry.slice(0, 8).map((item) => {
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

                  const modalHandle = (product) => {
                    setModalView((modalView) => product);
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
                })}

                <div className="col-lg-4 col-sm-6 my-4 d-flex align-items-center justify-content-center">
                  <Link to="/jewelry">
                    <p className="h2">See More</p>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="row">
        <Newsletter />
      </div>
    </div>
  );
};
export default ProductsList;
