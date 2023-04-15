import React from "react";
import { NavLink } from "react-router-dom";
import "./header_general.scss";

// Import Logo
import MyAccount from "../../assets/svg/Vector-myaccount.svg";
import Cart from "../../assets/svg/Vector-cart.svg";
import Search from "../../assets/svg/Search-Bar-search.svg";

const header_general = () => {
   return (
      <>
         <header className='header_general_wrapper'>
            <nav className='header_general_wrapper_nav'>
               <NavLink>
                  <span>Men</span>
               </NavLink>
               <NavLink>
                  <span>Woman</span>
               </NavLink>
               <p className="title">
                  NobleWear
               </p>
               <NavLink>
                  <span>Kids</span>
               </NavLink>
               <NavLink>
                  <span>Accessories</span>
               </NavLink>
            </nav>

            <div className='header_general_wrapper_sidemenu'>
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

export default header_general;
