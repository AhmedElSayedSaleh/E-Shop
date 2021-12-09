import React, { useState, useEffect } from "react";
import axios from "axios";
import { SingleProduct } from "../components/products";
import { LoadingBox, MessageBox, FiltersNav, Newsletter } from "../components";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalView, setModalView] = useState({});

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("/api/products");
      setLoading(false);
      setProducts(data.shoes);
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

  const productsContainer = products.map((item) => {
    let product = {
      brand: item.brand,
      brandUrl: item.brand_url,
      category: item.category,
      codCountry: item.codCountry,
      currency: item.currency,
      currentPrice: item.current_price,
      discount: item.discount,
      productId: item.id,
      primaryImage: item.image_url,
      isNew: item.is_new,
      likesCount: item.likes_count,
      model: item.model,
      name: item.name,
      rawPrice: item.raw_price,
      subcategory: item.subcategory,
      url: item.url,
      variationColor1: item.variation_0_color,
      variationImage1: item.variation_0_image,
      variationThumbnail1: item.variation_0_thumbnail,
      variationColor2: item.variation_1_color,
      variationImage2: item.variation_1_image,
      variationThumbnail2: item.variation_1_thumbnail,
    };
    // console.log(product.subcategory);

    const modalHandle = (product) => {
      setModalView((modalView) => product);
    };

    return (
      <div key={product.productId} className="col-lg-4 col-sm-6 my-4">
        <SingleProduct
          product={product}
          modalHandle={modalHandle}
          modalView={modalView}
        />
      </div>
    );
  });

  return (
    <div className={"container"}>
      <div className={"row"}>
        <div className="col-lg-3 mt-4">
          <FiltersNav />
        </div>
        <div className="col-lg-9">
          <div className="row">
            {loading ? (
              <LoadingBox />
            ) : error ? (
              <MessageBox>{error}</MessageBox>
            ) : (
              productsContainer
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
export default ProductsList;
