import React from "react";
import Slider from "react-slick";
import BestSellerCard from "../BestSeller_card/bestSeller_card";
import "./BestSellerSlider.scss";

import "../../../node_modules/slick-carousel/slick/slick.scss";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import ImageCard1 from "../../assets/images/imagecard1.webp";
import ImageCard2 from "../../assets/images/imagecard2.webp";
import ImageCard3 from "../../assets/images/imagecard3.webp";

const BestSellerSlider = () => {
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
   };
   return (
      <>
         <Slider {...settings} className='BestSellerSlider_wrapper'>
            <BestSellerCard
               img = {ImageCard1}
               promo='best value!'
               title='White Trucker Jacket'
               realprice='999.000'
               discountprice='499.000'
            />
            <BestSellerCard
               img = {ImageCard2}
               promo='Flash Sale!'
               title='Olive Casual Shirt'
               realprice='799.000'
               discountprice='299.000'
            />
            <BestSellerCard
               img = {ImageCard3}
               promo='20% Off'
               title='Black Long Sleeve'
               realprice='399.000'
               discountprice='149.000'
            />
            <BestSellerCard
               img = {ImageCard1}
               promo='best value!'
               title='White Trucker Jacket'
               realprice='999.000'
               discountprice='499.000'
            />
         </Slider>
         {/* <div className='BestSellerSlider_wrapper'>
            <BestSellerCard />
            <BestSellerCard />
            <BestSellerCard />
         </div> */}
      </>
   );
};

export default BestSellerSlider;
