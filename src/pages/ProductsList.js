import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import axios from "axios";
// import {
//   setProducts,
//   setBags,
//   setJewelry,
//   setShoes,
// } from "../store/actions/productActions";
// import { SingleProduct } from "../components/products";
import { LoadingBox, Newsletter } from "../components";
import { Link } from "react-router-dom";
import BagProduct from "../components/products/BagProduct";
import ShoeProduct from "../components/products/ShoeProduct";
import JewelryProduct from "../components/products/JewelryProduct";

const ProductsList = () => {
  // const products = useSelector((state) => state.allProducts.products);
  // const bags = useSelector((state) => state.bags.products);
  // const jewelry = useSelector((state) => state.jewelry.products);
  // const shoes = useSelector((state) => state.shoes.products);
  // const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);
  // const [modalView, setModalView] = useState({});

  // const fetchProducts = useCallback(async () => {
  //   try {
  //     const { data } = await axios.get(
  //       "https://mocki.io/v1/c2b9a068-ebec-4b92-b5b7-39a1247ae1c6"
  //     );
  // setLoading(false);
  //     dispatch(setProducts(data));
  //     dispatch(setBags(data.bags));
  //     dispatch(setJewelry(data.jewelry));
  //     dispatch(setShoes(data.shoes));

  //     // console.log(data.bags);
  //   } catch (err) {
  //     setError(err.message);
  //     setLoading(false);
  //   }
  // }, [dispatch]);

  // useEffect(() => {
  //   setLoading(true);
  //   fetchProducts();
  // }, [fetchProducts]);

  // setLoading(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [setLoading]);

  return (
    <div className={"container"}>
      <div className={"row"}>
        <div className="col-lg-12">
          {loading ? (
            <LoadingBox />
          ) : (
            // error ? (
            //   <MessageBox>{error}</MessageBox>
            // ) :
            <>
              <div className="row">
                <BagProduct productsSlice />
                {/* {bags.slice(0, 7).map((item) => {
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
                      className="col-xl-3 col-lg-4 col-sm-6 my-4"
                    >
                      <SingleProduct
                        product={product}
                        modalHandle={modalHandle}
                        modalView={modalView}
                      />
                    </div>
                  );
                })} */}

                <div className="col-xl-3 col-lg-4 col-sm-6 my-4 d-flex align-items-center justify-content-center">
                  <Link to="/bags">
                    <p className="h2 border-bottom">See More</p>
                  </Link>
                </div>
              </div>

              <div className="row">
                <ShoeProduct productsSlice />
                {/* {shoes.slice(0, 7).map((item) => {
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
                      className="col-xl-3 col-lg-4 col-sm-6 my-4"
                    >
                      <SingleProduct
                        product={product}
                        modalHandle={modalHandle}
                        modalView={modalView}
                      />
                    </div>
                  );
                })} */}

                <div className="col-xl-3 col-lg-4 col-sm-6 my-4 d-flex align-items-center justify-content-center">
                  <Link to="/shoes">
                    <p className="h2 border-bottom">See More</p>
                  </Link>
                </div>
              </div>

              <div className="row">
                <JewelryProduct productsSlice />
                {/* {jewelry.slice(0, 7).map((item) => {
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
                      className="col-xl-3 col-lg-4 col-sm-6 my-4"
                    >
                      <SingleProduct
                        product={product}
                        modalHandle={modalHandle}
                        modalView={modalView}
                      />
                    </div>
                  );
                })} */}

                <div className="col-xl-3 col-lg-4 col-sm-6 my-4 d-flex align-items-center justify-content-center">
                  <Link to="/jewelry">
                    <p className="h2 border-bottom">See More</p>
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
