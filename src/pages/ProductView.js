import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  CarouselProvider,
  Slider,
  Slide,
  ImageWithZoom,
  Dot,
  Image,
} from "pure-react-carousel";
import {
  Breadcrumb,
  HeadNotice,
  Button,
  Icon,
  ReviewCard,
  Newsletter,
  LoadingBox,
  MessageBox,
} from "../components";
import { ColorSelect, Quantity } from "../components/products";

import "pure-react-carousel/dist/react-carousel.es.css";
import {
  MaterialsImg,
  ReviewImg1,
  ReviewImg2,
  ReviewImg3,
} from "../assets/images";

const ProductView = () => {
  const { id } = useParams();

  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        "https://mocki.io/v1/c2b9a068-ebec-4b92-b5b7-39a1247ae1c6"
      );
      setProducts(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    setLoading(true);
    fetchProducts();
  }, []);
  useEffect(() => {
    for (const category in products) {
      products[category].map((product) =>
        product.id === +id ? setCurrentProduct(product) : null
      );
    }
  }, [products, id]);

  if (!currentProduct) {
    return (
      <div
        className={
          "w-100 h-100 bg-dark d-flex align-items-center justify-content-center"
        }
      >
        <h2 className={"text-warning"}>Product Not Found</h2>
      </div>
    );
  }

  return (
    <>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox>{error}</MessageBox>
      ) : (
        <div className="product-view">
          <div className="container">
            <div className="row">
              <Breadcrumb product={currentProduct} />
            </div>
            <div className="row pb-5">
              <div className="col-lg-6 pe-5">
                <CarouselProvider
                  naturalSlideWidth={100}
                  naturalSlideHeight={100}
                  totalSlides={
                    (currentProduct.image_url !== "" ? 1 : 0) +
                    (currentProduct.variation_0_image !== "" ? 1 : 0) +
                    (currentProduct.variation_1_image !== "" ? 1 : 0)
                  }
                >
                  <div className="row">
                    <div className="col-lg-3">
                      <Dot slide={0}>
                        <Image src={currentProduct.image_url} />
                      </Dot>
                      <Dot
                        slide={1}
                        className={
                          currentProduct.variation_0_thumbnail === ""
                            ? "d-none"
                            : ""
                        }
                      >
                        <Image src={currentProduct.variation_0_thumbnail} />
                      </Dot>
                      <Dot
                        slide={2}
                        className={
                          currentProduct.variation_1_thumbnail === ""
                            ? "d-none"
                            : ""
                        }
                      >
                        <Image src={currentProduct.variation_1_thumbnail} />
                      </Dot>
                    </div>
                    <div className="col-lg-9">
                      <Slider>
                        <Slide index={0}>
                          {/*<img className={'w-75'} src={currentProduct.variation_0_image} alt={currentProduct.name}/>*/}
                          <ImageWithZoom src={currentProduct.image_url} />
                        </Slide>
                        <Slide
                          index={1}
                          className={
                            currentProduct.variation_0_thumbnail === ""
                              ? "d-none"
                              : ""
                          }
                        >
                          <ImageWithZoom
                            src={currentProduct.variation_0_image}
                            alt={currentProduct.name}
                          />
                        </Slide>
                        <Slide
                          index={2}
                          className={
                            currentProduct.variation_1_thumbnail === ""
                              ? "d-none"
                              : ""
                          }
                        >
                          <ImageWithZoom
                            src={currentProduct.variation_1_image}
                            alt={currentProduct.name}
                          />
                        </Slide>
                      </Slider>
                    </div>
                  </div>
                </CarouselProvider>
              </div>
              <div className="col-lg-6 ps-5">
                <div
                  className={
                    "d-flex align-items-center justify-content-between"
                  }
                >
                  <div className={"product-view__notice"}>
                    <HeadNotice discount={currentProduct.discount}>
                      Discount
                    </HeadNotice>
                  </div>
                  <div className={"product-view__model"}>
                    Product ID:
                    <p>{currentProduct.model}</p>
                  </div>
                </div>
                <h2 className={"product-view__name py-3"}>
                  {currentProduct.name}
                </h2>
                <div className={"d-flex pb-4 product-view__price"}>
                  <span className={"product-view__price--current"}>
                    ${currentProduct.current_price}
                  </span>
                  <span
                    className={
                      currentProduct.discount !== 0
                        ? "product-view__price--raw"
                        : "d-none"
                    }
                  >
                    ${currentProduct.raw_price}
                  </span>
                  {/* <span className={""}>({currentProduct.likes_count}) likes</span> */}
                </div>
                <div>
                  <p className={"product-view__subtitle"}>Color: </p>
                  <ColorSelect colorData={currentProduct} />
                </div>
                <div className={"product-view__quantity"}>
                  <p className={"product-view__subtitle"}>Quantity:</p>
                  <div className={"d-flex align-items-center "}>
                    <Quantity />
                    <Button children={"Add to cart"} />
                    <div
                      className={
                        "d-flex align-items-center justify-content-center product-view__quantity__icon"
                      }
                    >
                      <Icon icon="heart" size={"1.5rem"} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5 pt-5 product-view__details">
              <nav className={"d-flex justify-content-center"}>
                <div className="nav" id="nav-tab" role="tablist">
                  <button
                    className="product-view__details__tab active"
                    id="nav-description-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-description"
                    type="button"
                    role="tab"
                    aria-controls="nav-description"
                    aria-selected="true"
                  >
                    description
                  </button>
                  <button
                    className="product-view__details__tab"
                    id="nav-reviews-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-reviews"
                    type="button"
                    role="tab"
                    aria-controls="nav-reviews"
                    aria-selected="false"
                  >
                    reviews (3)
                  </button>
                </div>
              </nav>
              <div className="mt-5 pt-5 tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-description"
                  role="tabpanel"
                  aria-labelledby="nav-description-tab"
                >
                  <div className="product-view__details__description">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="text-center">
                          <Icon icon="description" size={"5rem"} />
                          <div className="py-5 w-75 mx-auto">
                            <h4 className="py-4">
                              Details and product description
                            </h4>
                            <div className="mt-4">
                              <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                              </p>
                              <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Deleniti, repellat.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="text-center">
                          <Icon icon="outline" size={"5rem"} />
                          <div className="py-5 w-75 mx-auto">
                            <h4 className="py-4">Material(s) and care</h4>
                            <div className="mt-4">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing.
                              </p>
                              <p>
                                <img src={MaterialsImg} alt="" />
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="nav-reviews"
                  role="tabpanel"
                  aria-labelledby="nav-reviews-tab"
                >
                  <div className="product-view__details__reviews">
                    <div className="row">
                      <div className="col-lg-6 pt-4">
                        <div className="row">
                          <div className="col-lg-6 d-flex justify-content-center align-items-center">
                            <div className="text-center">
                              <h2 className="product-view__details__reviews__rate">
                                4.5
                              </h2>
                              <div>
                                <Icon
                                  icon="star-full"
                                  size={"1.4rem"}
                                  className="mx-1 product-view__details__reviews__star"
                                />
                                <Icon
                                  icon="star-full"
                                  size={"1.4rem"}
                                  className="mx-1 product-view__details__reviews__star"
                                />
                                <Icon
                                  icon="star-full"
                                  size={"1.4rem"}
                                  className="mx-1 product-view__details__reviews__star"
                                />
                                <Icon
                                  icon="star-full"
                                  size={"1.4rem"}
                                  className="mx-1 product-view__details__reviews__star"
                                />
                                <Icon
                                  icon="star-half"
                                  size={"1.4rem"}
                                  className="mx-1 product-view__details__reviews__star"
                                />
                              </div>
                              <div className="d-flex align-items-center justify-content-center mt-3">
                                <Icon icon="profile" size={"1rem"} />
                                <p className="mb-0 ps-2 product-view__details__reviews__opinions">
                                  81 all opinions
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="d-flex align-items-center mt-3">
                              <Icon
                                icon="star-full"
                                size={"1.3rem"}
                                className="product-view__details__reviews__star"
                              />
                              <div className="product-view__details__reviews__progress">
                                <div
                                  className="text-center"
                                  style={{ width: "3rem" }}
                                >
                                  <p className="mb-0">1</p>
                                </div>
                                <div
                                  className="progress product-view__details__reviews__progress__line"
                                  style={{ height: "2px" }}
                                >
                                  <div
                                    className="progress-bar product-view__details__reviews__progress__bar"
                                    role="progressbar"
                                    style={{ width: "0%" }}
                                    aria-valuenow="25"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <div className="d-flex align-items-center mt-3">
                              <Icon
                                icon="star-full"
                                size={"1.3rem"}
                                className="product-view__details__reviews__star"
                              />
                              <div className="product-view__details__reviews__progress">
                                <div
                                  className="text-center"
                                  style={{ width: "3rem" }}
                                >
                                  <p className="mb-0">2</p>
                                </div>
                                <div
                                  className="progress product-view__details__reviews__progress__line"
                                  style={{ height: "2px" }}
                                >
                                  <div
                                    className="progress-bar product-view__details__reviews__progress__bar"
                                    role="progressbar"
                                    style={{ width: "0%" }}
                                    aria-valuenow="25"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <div className="d-flex align-items-center mt-3">
                              <Icon
                                icon="star-full"
                                size={"1.3rem"}
                                className="product-view__details__reviews__star"
                              />
                              <div className="product-view__details__reviews__progress">
                                <div
                                  className="text-center"
                                  style={{ width: "3rem" }}
                                >
                                  <p className="mb-0">3</p>
                                </div>
                                <div
                                  className="progress product-view__details__reviews__progress__line"
                                  style={{ height: "2px" }}
                                >
                                  <div
                                    className="progress-bar product-view__details__reviews__progress__bar"
                                    role="progressbar"
                                    style={{ width: "15%" }}
                                    aria-valuenow="25"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <div className="d-flex align-items-center mt-3">
                              <Icon
                                icon="star-full"
                                size={"1.3rem"}
                                className="product-view__details__reviews__star"
                              />
                              <div className="product-view__details__reviews__progress">
                                <div
                                  className="text-center"
                                  style={{ width: "3rem" }}
                                >
                                  <p className="mb-0">4</p>
                                </div>
                                <div
                                  className="progress product-view__details__reviews__progress__line"
                                  style={{ height: "2px" }}
                                >
                                  <div
                                    className="progress-bar product-view__details__reviews__progress__bar"
                                    role="progressbar"
                                    style={{ width: "30%" }}
                                    aria-valuenow="25"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <div className="d-flex align-items-center mt-3">
                              <Icon
                                icon="star-full"
                                size={"1.3rem"}
                                className="product-view__details__reviews__star"
                              />
                              <div className="product-view__details__reviews__progress">
                                <div
                                  className="text-center"
                                  style={{ width: "3rem" }}
                                >
                                  <p className="mb-0">5</p>
                                </div>
                                <div
                                  className="progress product-view__details__reviews__progress__line"
                                  style={{ height: "2px" }}
                                >
                                  <div
                                    className="progress-bar product-view__details__reviews__progress__bar"
                                    role="progressbar"
                                    style={{ width: "80%" }}
                                    aria-valuenow="25"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center mt-5 pt-5">
                          <Button children={"ADD OPINION"} />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="product-view__details__reviews__cards">
                          <ReviewCard
                            imgSrc={ReviewImg1}
                            title="John Deo1"
                            desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                          />
                          <ReviewCard
                            imgSrc={ReviewImg2}
                            title="John Deo2"
                            desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                          />
                          <ReviewCard
                            imgSrc={ReviewImg3}
                            title="John Deo3"
                            desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <Newsletter />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductView;
