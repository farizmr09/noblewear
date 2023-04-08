import React from "react";
import { NavLink } from "react-router-dom";
import "./homepage.scss";

import HeaderHomepage from "../../layout/header_homepage/header_homepage";
import BestSellerSlider from "../../components/BestSellerslider/BestSellerSlider";
import PremiumBrand from "../../components/Premium_brand/PremiumBrand";

// Image Import
import HomepageBannerImg from "../../assets/images/homepage_img.webp";
import LatestProduct1 from '../../assets/images/latestproduct-homepage/latestproduct1.webp'
import LatestProduct2 from '../../assets/images/latestproduct-homepage/latestproduct2.webp'
import LatestProduct3 from '../../assets/images/latestproduct-homepage/latestproduct3.webp'
import Confidence from '../../assets/images/confidence-homepage/confidence.webp';
import Ramzy from '../../assets/images/confidence-homepage/ramzy.webp';
import Fariz from '../../assets/images/confidence-homepage/fariz.webp';

const homepage = () => {
   return (
      <>
         <div className='homepage_wrapper_banner'>
            <HeaderHomepage />

            <div className='homepage_wrapper_banner_content'>
               <div className='homepage_wrapper_banner_content_header'>
                  <h1>
                     <span className='left'>Noble</span>
                     <span className='right'>Wear.</span>
                  </h1>
               </div>
               <div className='homepage_wrapper_banner_content_img'>
                  <img src={HomepageBannerImg} alt='' />
               </div>
               <div className='homepage_wrapper_banner_content_desc'>
                  <div className='homepage_wrapper_banner_content_desc_leftcol'>
                     <p className='desc_1'>
                        Indulge in our exquisite, high-end fashion that embodies
                        sophistication, refinement, and timeless elegance.{" "}
                     </p>
                     <p className='desc_2'>
                        Get 50% Off from your first purchase!
                     </p>

                     <NavLink className='btn'>ShopNow</NavLink>
                  </div>
                  <div className='homepage_wrapper_banner_content_desc_rightcol'>
                     <ul>
                        <li>
                           <NavLink>Home</NavLink>
                        </li>
                        <li>
                           <NavLink>Best Selling Products</NavLink>
                        </li>
                        <li>
                           <NavLink>Premium Brands</NavLink>
                        </li>
                        <li>
                           <NavLink>Latest Product</NavLink>
                        </li>
                        <li>
                           <NavLink>Testimonials</NavLink>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>

         <div className='homepage_wrapper_bestseller'>
            <div className='homepage_wrapper_bestseller_head'>
               <div className='homepage_wrapper_bestseller_head_leftcol'>
                  <h3>Our Best Seller</h3>
                  <h2>Collections</h2>
                  <p>
                     Join the trendsetters with our top-selling fashion pieces
                     from prestiguous brand
                  </p>
               </div>
               <div className='homepage_wrapper_bestseller_head_rightcol'>
                  <NavLink className='btn'>Discover More</NavLink>
               </div>
            </div>
            <div className='homepage_wrapper_bestseller_slider'>
               <BestSellerSlider />
            </div>
         </div>
         <div className="homepage_wrapper_premium">
            <div className="homepage_wrapper_premium_head">
               <h3>Find Your Style with Our Range of</h3>
               <h2>Premium Fashion Brands</h2>
               <p>
                  Our carefully curated selection includes some of the world's most exclusive labels, each one synonymous with luxury, elegance, and style. Discover the perfect outfit for any occasion and elevate your fashion game to new heights.
               </p>
            </div>
            <div className="">
               <PremiumBrand />
            </div>
         </div>

         <div className="homepage_wrapper_latest">


            <column className='homepage_wrapper_latest_leftcol'>
               <article className='homepage_wrapper_latest_leftcol_article'>
                  <NavLink>
                     <div className="homepage_wrapper_latest_leftcol_article_content">
                        <h3 className="">Noble Wear</h3>
                        <p>"The pictures used in this website are sourced from Internet and other reputable fashion sources. We do not claim any copyright or ownership of these images. They are used for educational
                           purposes only, to showcase the latest fashion trends and inspire our users. “</p>
                        <h2>Elevate Your Fashion With <br /> Our Latest Product</h2>
                     </div>
                     <img src={LatestProduct1} alt="" />
                  </NavLink>
               </article>
            </column>

            <column className='homepage_wrapper_latest_rightcol'>
               <article className="homepage_wrapper_latest_rightcol_article article1">
                  <NavLink>
                     <p>Featuring the latest fashion trends and must-have pieces of the season. </p>
                     <img src={LatestProduct3} alt="" />
                  </NavLink>
               </article>

               <article className="homepage_wrapper_latest_rightcol_article article2">
                  <NavLink>
                     <p>Crafted with the utmost attention to detail, ensuring a perfect fit and maximum comfort. </p>
                     <img src={LatestProduct2} alt="" />
                  </NavLink>
               </article>

            </column>

         </div>

         <div className="homepage_wrapper_confidence">
            <div className="homepage_wrapper_confidence_img">
               <img src={Confidence} alt="" />
            </div>
            <div className="homepage_wrapper_confidence_content">
               <div className="homepage_wrapper_confidence_content_head">
                  <h2>Shop with Confidence</h2>
                  <h3>Read Our Five-Star Reviews and Ratings</h3>
               </div>
               <div className="homepage_wrapper_confidence_content_cards">
                  <article className="homepage_wrapper_confidence_content_cards_card ">
                     <div className="homepage_wrapper_confidence_content_cards_card_head">
                        <div className="homepage_wrapper_confidence_content_cards_card_head_img">
                           <img src={Ramzy} alt="" />
                        </div>
                        <h4>Remji Odinson</h4>
                        <div className="homepage_wrapper_confidence_content_cards_card_head_ratings">
                           <p>5.0</p>
                        </div>
                     </div>
                     <div className="homepage_wrapper_confidence_content_cards_card_quote">
                        <p>“Sed gravida blandit ultrices. Sed sed tortor mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis”</p>
                     </div>
                  </article>

                  <article className="homepage_wrapper_confidence_content_cards_card ">
                     <div className="homepage_wrapper_confidence_content_cards_card_head">
                        <div className="homepage_wrapper_confidence_content_cards_card_head_img">
                           <img src={Fariz} alt="" />
                        </div>
                        <h4>Fareez DeezNucht</h4>
                        <div className="homepage_wrapper_confidence_content_cards_card_head_ratings">
                           <p>5.0</p>
                        </div>
                     </div>
                     <div className="homepage_wrapper_confidence_content_cards_card_quote">
                        <p>“Sed gravida blandit ultrices. Sed sed tortor mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis”</p>
                     </div>
                  </article>
               </div>

            </div>

         </div>
      </>
   );
};

export default homepage;
