import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import axios from "axios";
import { SingleProduct } from "../components/products";
import { LoadingBox, MessageBox, FiltersNav, Newsletter } from "../components";
import ShoeProduct from "../components/products/ShoeProduct";

const Shoes = () => {
  const shoes = useSelector((state) => state.shoes.products);

  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  // const [modalView, setModalView] = useState({});
  const subcategories = [];

  // const fetchProducts = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       "https://mocki.io/v1/c2b9a068-ebec-4b92-b5b7-39a1247ae1c6"
  //     );
  //     setLoading(false);
  //     setProducts(data.shoes);
  //     // console.log(data.shoes);
  //   } catch (err) {
  //     setError(err.message);
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   setLoading(true);
  //   fetchProducts();
  // }, []);

  const productsContainer = shoes.map((product) => {
    // let product = {
    //   brand: item.brand,
    //   brandUrl: item.brand_url,
    //   category: item.category,
    //   codCountry: item.codCountry,
    //   currency: item.currency,
    //   rawPrice: item.raw_price,
    //   discount: item.discount,
    //   productId: item.id,
    //   primaryImage: item.image_url,
    //   isNew: item.is_new,
    //   likesCount: item.likes_count,
    //   model: item.model,
    //   name: item.name,
    //   currentPrice:
    //     item.current_price !== null ? item.current_price : item.raw_price,
    //   subcategory: item.subcategory,
    //   url: item.url,
    //   variationColor1: item.variation_0_color,
    //   variationImage1: item.variation_0_image,
    //   variationThumbnail1: item.variation_0_thumbnail,
    //   variationColor2: item.variation_1_color,
    //   variationImage2: item.variation_1_image,
    //   variationThumbnail2: item.variation_1_thumbnail,
    // };
    // console.log(product.subcategory);

    // const modalHandle = (product) => {
    //   setModalView((modalView) => product);
    // };

    if (subcategories.indexOf(product.subcategory) === -1) {
      subcategories.push(product.subcategory);
    }

    // return (
    // <div key={product.productId} className="col-lg-4 col-sm-6 my-4">
    //   <SingleProduct
    //     product={product}
    //     modalHandle={modalHandle}
    //     modalView={modalView}
    //   />
    // </div>
    // );
  });

  return (
    <div className={"container"}>
      <div className={"row"}>
        <div className="col-lg-3 mt-4">
          <FiltersNav subcategories={subcategories} />
        </div>
        <div className="col-lg-9">
          <div className="row">
            <ShoeProduct />

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

export default Shoes;
