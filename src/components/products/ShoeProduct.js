import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setShoes } from "../../store/actions/productActions";
import { Link } from "react-router-dom";
import { Icon, HeadNotice, MessageBox } from "../";
import { ProductModal } from "./";

const ShoeProduct = ({ productsSlice }) => {
  const shoes = useSelector((state) => state.shoes.products);
  const dispatch = useDispatch();

  const [error, setError] = useState(false);
  const [modalView, setModalView] = useState({});

  const fetchProducts = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "https://mocki.io/v1/c2b9a068-ebec-4b92-b5b7-39a1247ae1c6"
      );
      dispatch(setShoes(data.shoes));
    } catch (err) {
      setError(err.message);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <>
      {productsSlice
        ? shoes.slice(0, 7).map((item) => {
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

            return error ? (
              <MessageBox>{error}</MessageBox>
            ) : (
              <div
                key={product.productId}
                className="col-xl-3 col-lg-4 col-sm-6 my-4"
              >
                <div className={"single-product"}>
                  <div className={"px-3 single-product__inner"}>
                    <div className={"single-product__head"}>
                      <Link to={`/product/${product.productId}`}>
                        <img
                          className={"w-100 h-100 single-product__head__img"}
                          src={product.primaryImage}
                          alt={product.name}
                        />
                      </Link>
                      <HeadNotice discount={product.discount}>
                        {product.discount}%
                      </HeadNotice>
                      <HeadNotice isNew={product.isNew}>NEW</HeadNotice>
                      <div className={"w-100 d-flex justify-content-center"}>
                        <button
                          type={"button"}
                          className={"btn px-5 d-none single-product__btn"}
                          onClick={() => modalHandle(product)}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          QUICK SHOP
                        </button>
                      </div>
                      {/*modal>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> here*/}
                      <ProductModal modalView={modalView} />
                    </div>
                    <div className={"single-product__body py-3"}>
                      <p className={"single-product__body__title"}>
                        {product.name}
                      </p>
                      <div className={"d-flex justify-content-between"}>
                        <div
                          className={
                            "d-flex justify-content-evenly single-product__body__price"
                          }
                        >
                          <span
                            className={
                              "d-inline-block pe-5 single-product__body__price__current"
                            }
                          >
                            ${product.currentPrice}
                          </span>
                          <span
                            className={
                              product.discount !== null
                                ? "text-decoration-line-through single-product__body__price__raw"
                                : "d-none"
                            }
                          >
                            ${product.rawPrice}
                          </span>
                        </div>
                        <div className={"single-product__body__likes"}>
                          <Icon
                            icon="heart"
                            size={"2rem"}
                            className={"me-3 single-product__body__likes__icon"}
                          />
                          <span
                            className={"single-product__body__likes__count"}
                          >
                            ({product.likesCount})
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        : shoes.map((item) => {
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

            return error ? (
              <MessageBox>{error}</MessageBox>
            ) : (
              <div key={product.productId} className="col-md-4 col-sm-6 my-4">
                <div className={"single-product"}>
                  <div className={"px-3 single-product__inner"}>
                    <div className={"single-product__head"}>
                      <Link to={`/product/${product.productId}`}>
                        <img
                          className={"w-100 h-100 single-product__head__img"}
                          src={product.primaryImage}
                          alt={product.name}
                        />
                      </Link>
                      <HeadNotice discount={product.discount}>
                        {product.discount}%
                      </HeadNotice>
                      <HeadNotice isNew={product.isNew}>NEW</HeadNotice>
                      <div className={"w-100 d-flex justify-content-center"}>
                        <button
                          type={"button"}
                          className={"btn px-5 d-none single-product__btn"}
                          onClick={() => modalHandle(product)}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          QUICK SHOP
                        </button>
                      </div>
                      {/*modal>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> here*/}
                      <ProductModal modalView={modalView} />
                    </div>
                    <div className={"single-product__body py-3"}>
                      <p className={"single-product__body__title"}>
                        {product.name}
                      </p>
                      <div className={"d-flex justify-content-between"}>
                        <div
                          className={
                            "d-flex justify-content-evenly single-product__body__price"
                          }
                        >
                          <span
                            className={
                              "d-inline-block pe-5 single-product__body__price__current"
                            }
                          >
                            ${product.currentPrice}
                          </span>
                          <span
                            className={
                              product.discount !== null
                                ? "text-decoration-line-through single-product__body__price__raw"
                                : "d-none"
                            }
                          >
                            ${product.rawPrice}
                          </span>
                        </div>
                        <div className={"single-product__body__likes"}>
                          <Icon
                            icon="heart"
                            size={"2rem"}
                            className={"me-3 single-product__body__likes__icon"}
                          />
                          <span
                            className={"single-product__body__likes__count"}
                          >
                            ({product.likesCount})
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
    </>
  );
};

export default ShoeProduct;
