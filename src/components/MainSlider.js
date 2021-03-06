import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
  CarouselContext,
} from "pure-react-carousel";
import { Icon } from "./";

import {
  ImgSlider1,
  ImgSlider2,
  ImgSlider3,
  ImgSlider4,
} from "../assets/images";

import "pure-react-carousel/dist/react-carousel.es.css";

const MainSlider = () => {
  const CurrentSlideCount = () => {
    const carouselContext = useContext(CarouselContext);
    const [currentSlide, setCurrentSlide] = useState(
      carouselContext.state.currentSlide
    );
    useEffect(() => {
      function onChange() {
        setCurrentSlide(carouselContext.state.currentSlide);
      }
      carouselContext.subscribe(onChange);
      return () => carouselContext.unsubscribe(onChange);
    }, [carouselContext]);
    return <span>0{currentSlide + 1}</span>;
  };

  const TotalSlidesCount = () => {
    const carouselContext = useContext(CarouselContext);
    return <span>0{carouselContext.state.totalSlides}</span>;
  };

  return (
    <div className={"main-carousel"}>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={50}
        totalSlides={4}
        isPlaying={true}
      >
        <div className={"main-carousel__slider"}>
          <Slider>
            <Slide index={0}>
              <img className={"w-100 vh-100"} src={ImgSlider1} alt="" />
              <div className={"main-carousel__slider__overlay"}></div>
            </Slide>
            <Slide index={1}>
              <img className={"w-100 vh-100"} src={ImgSlider2} alt="" />
              <div className={"main-carousel__slider__overlay"}></div>
            </Slide>
            <Slide index={2}>
              <img className={"w-100 vh-100"} src={ImgSlider3} alt="" />
              <div className={"main-carousel__slider__overlay"}></div>
            </Slide>
            <Slide index={3}>
              <img className={"w-100 vh-100"} src={ImgSlider4} alt="" />
              <div className={"main-carousel__slider__overlay"}></div>
            </Slide>
          </Slider>

          <div className="container">
            <div className="row">
              <div className={"w-75 d-flex main-carousel__slider__inner"}>
                <div className="d-flex flex-column justify-content-between align-items-center">
                  <CurrentSlideCount />
                  <DotGroup className="d-flex flex-column h-100" />
                  <TotalSlidesCount />
                </div>
                <div className="w-75 ps-5 ms-5">
                  <h1 className={"main-carousel__slider__inner__title"}>
                    Sale of the summer collection
                  </h1>
                  <div
                    className={"py-5 my-5 main-carousel__slider__inner__link"}
                  >
                    <Link to={`/products`}>
                      <div
                        className={"main-carousel__slider__inner__link__icon"}
                      >
                        <Icon icon="arrow-right" size={"1.5rem"} disableFill />
                      </div>
                    </Link>
                    <span
                      className={
                        "text-uppercase ps-3 main-carousel__slider__inner__link__span"
                      }
                    >
                      shop now
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-carousel__slider__footer">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-9 pt-4 bg-white main-carousel__slider__footer__content">
                  <div className="d-flex justify-content-end">
                    <div className="d-flex justify-content-evenly pe-5">
                      <div className="w-50 d-flex">
                        <div className="px-3 mt-3 main-carousel__slider__footer__content__icon">
                          <Icon
                            icon="free-shipping"
                            size={"1.5rem"}
                            disableFill
                          />
                        </div>
                        <div className="ps-4 main-carousel__slider__footer__content__desc">
                          <h5>Free Shipping</h5>
                          <p>On purchases over $199</p>
                        </div>
                      </div>
                      <div className="w-50 d-flex">
                        <div className="px-3 mt-3 main-carousel__slider__footer__content__icon">
                          <Icon icon="Happy" size={"1.5rem"} disableFill />
                        </div>
                        <div className="ps-4 main-carousel__slider__footer__content__desc">
                          <h5>99% satisfied customers</h5>
                          <p>Our clients' opinions speak for themselves</p>
                        </div>
                      </div>
                      <div className="w-50 d-flex">
                        <div className="px-3 mt-3 main-carousel__slider__footer__content__icon">
                          <Icon icon="guarantee" size={"1.5rem"} disableFill />
                        </div>
                        <div className="ps-4 main-carousel__slider__footer__content__desc">
                          <h5>Originality Guaranteed</h5>
                          <p>
                            30 days warranty for each product from our store
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 d-flex justify-content-center">
                  <div>
                    <ButtonBack className="mx-3 main-carousel__slider__footer__arrow">
                      <Icon icon="arrow-left" size={"2rem"} disableFill />
                    </ButtonBack>
                    <ButtonNext className="mx-3 main-carousel__slider__footer__arrow">
                      <Icon icon="arrow-right" size={"2rem"} disableFill />
                    </ButtonNext>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CarouselProvider>
    </div>
  );
};

export default MainSlider;
