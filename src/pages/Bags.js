import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// components
import { SingleProduct } from "../components/products";
import { LoadingBox, MessageBox, FiltersNav, Newsletter } from "../components";

// Actions
// import { getBags as BagsList } from "../store/actions/productActions";
import { fetchBags } from "../store/slices/BagsSlice";

const Bags = () => {
  const dispatch = useDispatch();
  const bagsList = useSelector((state) => state.bagsProducts);

  const [modalView, setModalView] = useState({});

  const { loading, error, data } = bagsList;

  const subcategories = [];

  useEffect(() => {
    dispatch(fetchBags());
  }, [dispatch]);

  // data.map((product) => {
  //   if (subcategories.indexOf(product.subcategory) === -1) {
  //     subcategories.push(product.subcategory);
  //   }
  // });

  if (Array.isArray(data)) {
    data.map((product) =>
      subcategories.indexOf(product.subcategory) === -1
        ? subcategories.push(product.subcategory)
        : null
    );
  }

  // console.log(subcategories);
  // subcategories.map((item) => {
  //   item.checked ? console.log(item) : console.log("checked");
  // });

  const modalHandle = (product) => {
    setModalView(product);
  };

  return (
    <div className={"container pt-5"}>
      <div className={"row"}>
        <div className="col-lg-3 mt-4">
          <FiltersNav subcategories={subcategories} />
        </div>
        <div className="col-lg-9">
          <div className="row">
            {/* <SingleProduct dataType={"bags"} /> */}

            {loading ? (
              <LoadingBox />
            ) : error ? (
              <MessageBox>{error}</MessageBox>
            ) : (
              data &&
              data.map((item) => {
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

export default Bags;
