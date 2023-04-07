import React from "react";
import "./PremiumBrand.scss";

// Import Image

import bv from "../../assets/images/brand/bv.webp"
import bvlgari from "../../assets/images/brand/bvlgari.webp"
import chanel from "../../assets/images/brand/chanel.webp"
import dior from "../../assets/images/brand/dior.webp"
import givenchy from "../../assets/images/brand/givenchy.webp"
import gucci from "../../assets/images/brand/gucci.webp"
import hermes from "../../assets/images/brand/hermes.webp"
import marc_jacobs from "../../assets/images/brand/marc_jacobs.webp"
import lv from "../../assets/images/brand/lv.webp"
import prada from "../../assets/images/brand/prada.webp"
import saint_laurent from "../../assets/images/brand/saint_laurent.webp"
import versace from "../../assets/images/brand/versace.webp"


const homepage_card = () => {
   return (
      <>
         <div className="homepage_brand_wrapper_top">
            <a href=''>
               <div className='homepage_brand_wrapper_top_image'>
                  <img className="homepage_brand_wrapper_top_image_logo" src={hermes} alt='' />
               </div>
            </a>
            <a href=''>
               <div className='homepage_brand_wrapper_image'>
                  <img className="homepage_brand_wrapper_top_image_logo" src={chanel} alt='' />
               </div>
            </a>
            <a href=''>
               <div className='homepage_brand_wrapper_image'>
                  <img className="homepage_brand_wrapper_top_image_logo" src={dior} alt='' />
               </div>
            </a>
         </div>

         <div className="homepage_brand_wrapper_middle">
            <a className="homepage_brand_wrapper_middle_gucci" href="">
               <div className="homepage_brand_wrapper_middle_gucci_image">
                  <img className="homepage_brand_wrapper_middle_gucci_image_logo" src={gucci} alt="" />
               </div>
            </a>
            <div>
               <a className="homepage_brand_wrapper_middle_right">
                  <div className="homepage_brand_wrapper_middle_right_image">
                     <img className="homepage_brand_wrapper_middle_right_image_logo" src={prada} alt='' />
                  </div>
               </a>
               <a className="homepage_brand_wrapper_middle_right">
                  <div className="homepage_brand_wrapper_middle_right_image">
                     <img className="homepage_brand_wrapper_middle_right_image_logo" src={bv} alt='' />
                  </div>
               </a>
            </div>
            <div>
               <a className="homepage_brand_wrapper_middle_right">
                  <div className="homepage_brand_wrapper_middle_right_image">
                     <img className="homepage_brand_wrapper_middle_right_image_logo" src={marc_jacobs} alt='' />
                  </div>
               </a>
               <a className="homepage_brand_wrapper_middle_right">
                  <div className="homepage_brand_wrapper_middle_right_image">
                     <img className="homepage_brand_wrapper_middle_right_image_logo" src={lv} alt='' />
                  </div>
               </a>
            </div>
         </div>

         <div className="homepage_brand_wrapper_bottom">
            <a>
               <div className="homepage_brand_wrapper_bottom_image">
                  <img className="homepage_brand_wrapper_bottom_image_logo" src={bvlgari} alt='' />
               </div>
            </a>
            <a>
               <div className="homepage_brand_wrapper_bottom_image">
                  <img className="homepage_brand_wrapper_bottom_image_logo" src={versace} alt='' />
               </div>
            </a>
            <a>
               <div className="homepage_brand_wrapper_bottom_image">
                  <img className="homepage_brand_wrapper_bottom_image_logo" src={saint_laurent} alt='' />
               </div>
            </a>
            <a>
               <div className="homepage_brand_wrapper_bottom_image">
                  <img className="homepage_brand_wrapper_bottom_image_logo" src={givenchy} alt='' />
               </div>
            </a>
         </div>
      </>
   );
};

export default homepage_card;
