import React from "react";
import { NavLink } from "react-router-dom";
import HeaderHomepage from "../../layout/header_homepage/header_homepage";
import "./homepage.scss";

// Image Import
import HomepageBannerImg from "../../assets/images/homepage_img.webp";

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
         </div>
      </>
   );
};

export default homepage;
