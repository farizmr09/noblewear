import React from "react";
import { NavLink } from "react-router-dom";
import "./header_homepage.scss";

// Import Logo
import MyAccount from "../../assets/svg/Vector-myaccount.svg";
import Cart from "../../assets/svg/Vector-cart.svg";
import Search from "../../assets/svg/Search-Bar-search.svg";

const header_homepage = () => {
   return (
      <>
         <header className='header_homepage_wrapper'>
            <nav className='header_homepage_wrapper_nav'>
               <NavLink to='/product-list'>
                  <span>Men</span>
               </NavLink>
               <NavLink to='/product-list'>
                  <span>Woman</span>
               </NavLink>
               <p>
                  <span className='left'>By IzBr</span>
                  <span className='right'>other.</span>
               </p>
               <NavLink to='/product-list'>
                  <span>Kids</span>
               </NavLink>
               <NavLink to='/product-list'>
                  <span>Accessories</span>
               </NavLink>
            </nav>

            <div className='header_homepage_wrapper_sidemenu'>
               <NavLink>
                  <img src={MyAccount} alt='' />
               </NavLink>
               <NavLink>
                  <img src={Cart} alt='' />
               </NavLink>
               <NavLink>
                  <img src={Search} alt='' />
               </NavLink>
            </div>
         </header>
      </>
   );
};

export default header_homepage;
