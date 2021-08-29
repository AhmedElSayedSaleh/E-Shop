import React from 'react';
import { CarouselProvider, Slider, Slide, ImageWithZoom, Dot, Image } from 'pure-react-carousel';
import Breadcrumb from "../Breadcrumb";
import HeadNotice from "../HeadNotice";
import data from "../../data/sample.json";
import 'pure-react-carousel/dist/react-carousel.es.css';
// import "../../styles/pages/product-details.scss";

const ProductDetails = (props) => {
    const product = data.find(el => +el.id === +props.match.params.id);
    console.log(product)
    if (!product) {
        return <div className={'w-100 h-100 bg-dark d-flex align-items-center justify-content-center'}>
            <h2 className={'text-warning'}>Product Not Found</h2>
        </div>;
    }

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb product={product}/>
            </div>
            <div className="row">
                <div className="col-6">
                    <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={100} totalSlides={(product.image_url !=="" ? 1 : 0) + (product.variation_0_image !=="" ? 1 : 0) + (product.variation_1_image !=="" ? 1 : 0)}>
                        <div className="row">
                            <div className="col-3">
                                <Dot slide={0}>
                                    <Image src={product.image_url} />
                                </Dot>
                                <Dot slide={1}  className={product.variation_0_thumbnail === "" ? 'd-none' : ''}>
                                    <Image src={product.variation_0_thumbnail} />
                                </Dot>
                                <Dot slide={2} className={product.variation_1_thumbnail === "" ? 'd-none' : ''}>
                                    <Image src={product.variation_1_thumbnail} />
                                </Dot>
                            </div>
                            <div className="col-9">
                                <Slider>
                                    <Slide index={0}>
                                        {/*<img className={'w-75'} src={product.variation_0_image} alt={product.name}/>*/}
                                        <ImageWithZoom src={product.image_url}/>
                                    </Slide>
                                    <Slide index={1} className={product.variation_0_thumbnail === "" ? 'd-none' : ''}>
                                        <ImageWithZoom src={product.variation_0_image} alt={product.name}/>
                                    </Slide>
                                    <Slide index={2} className={product.variation_1_thumbnail === "" ? 'd-none' : ''}>
                                        <ImageWithZoom src={product.variation_1_image} alt={product.name}/>
                                    </Slide>
                                </Slider>
                            </div>
                        </div>
                    </CarouselProvider>
                </div>
                <div className="col-6">
                    <div className={'Product-details__notice'} style={{height:'50px'}}>
                        <HeadNotice discount={product.discount}>Discount</HeadNotice>
                    </div>
                    <h3 className={''}>{product.name}</h3>
                    <h2>{product.model}</h2>
                    <h3>{product.category}</h3>
                    <h4>{product.subcategory}</h4>
                    <div className="d-flex justify-content-between w-25">
                        <p style={{color: product.variation_0_color}}>{product.variation_0_color}</p>
                        <p style={{color: product.variation_1_color}}>{product.variation_1_color}</p>
                    </div>
                    <div className={'d-flex justify-content-between w-50'}>
                        <span className={'text-danger'}>${product.current_price}</span>
                        <span className={product.discount !== 0 ? 'text-decoration-line-through text-secondary' : 'd-none'}>${product.raw_price}</span>
                        <span className={''}>({product.likes_count}) likes</span>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
