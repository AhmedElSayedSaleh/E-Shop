import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// components
import { SingleProduct } from "../components/products";
import { LoadingBox, MessageBox, Newsletter } from "../components";

// Actions
import {
  getBags as bagsList,
  getShoes as shoesList,
  getJewelry as jewelryList,
} from "../store/actions/productActions";

const ProductsList = () => {
  const dispatch = useDispatch();
  const getBags = useSelector((state) => state.getBags);
  const getShoes = useSelector((state) => state.getShoes);
  const getJewelry = useSelector((state) => state.getJewelry);
  const [modalView, setModalView] = useState({});

  useEffect(() => {
    dispatch(bagsList());
    dispatch(shoesList());
    dispatch(jewelryList());
  }, [dispatch]);

  const modalHandle = (product) => {
    setModalView(product);
  };

  return (
    <div className={"container"}>
      <div className={"row"}>
        <div className="col-lg-12">
          {getBags.loading ? (
            <LoadingBox />
          ) : getBags.error ? (
            <MessageBox>{getBags.error}</MessageBox>
          ) : (
            <div className="row">
              {getBags.products.slice(0, 7).map((item) => {
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
                    className="col-xl-3 col-lg-4 col-sm-6 my-4"
                  >
                    <SingleProduct
                      product={product}
                      modalHandle={modalHandle}
                      modalView={modalView}
                    />
                  </div>
                );
              })}

              <div className="col-xl-3 col-lg-4 col-sm-6 my-4 d-flex align-items-center justify-content-center">
                <Link to="/bags">
                  <p className="h2 border-bottom">See More</p>
                </Link>
              </div>
            </div>
          )}
          {getShoes.loading ? (
            <LoadingBox />
          ) : getShoes.error ? (
            <MessageBox>{getShoes.error}</MessageBox>
          ) : (
            <div className="row">
              {getShoes.products.slice(0, 7).map((item) => {
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
                    className="col-xl-3 col-lg-4 col-sm-6 my-4"
                  >
                    <SingleProduct
                      product={product}
                      modalHandle={modalHandle}
                      modalView={modalView}
                    />
                  </div>
                );
              })}

              <div className="col-xl-3 col-lg-4 col-sm-6 my-4 d-flex align-items-center justify-content-center">
                <Link to="/shoes">
                  <p className="h2 border-bottom">See More</p>
                </Link>
              </div>
            </div>
          )}
          {getJewelry.loading ? (
            <LoadingBox />
          ) : getJewelry.error ? (
            <MessageBox>{getJewelry.error}</MessageBox>
          ) : (
            <div className="row">
              {getJewelry.products.slice(0, 7).map((item) => {
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
                    className="col-xl-3 col-lg-4 col-sm-6 my-4"
                  >
                    <SingleProduct
                      product={product}
                      modalHandle={modalHandle}
                      modalView={modalView}
                    />
                  </div>
                );
              })}

              <div className="col-xl-3 col-lg-4 col-sm-6 my-4 d-flex align-items-center justify-content-center">
                <Link to="/jewelry">
                  <p className="h2 border-bottom">See More</p>
                </Link>
              </div>
            </div>
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
