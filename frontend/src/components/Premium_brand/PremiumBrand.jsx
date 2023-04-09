import React from "react";
import { NavLink } from 'react-router-dom'
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


const PremiumBrandGrid = () => {
   return (
      <>
         <div className="premiumbrand_wrapper">
            <div className="premiumbrand_wrapper_top">
               <article className="hermes"><NavLink><img src={hermes} alt="" /></NavLink></article>
               <article className="chanel"><NavLink><img src={chanel} alt="" /></NavLink></article>
               <article className="dior"><NavLink><img src={dior} alt="" /></NavLink></article>
            </div>

            <div className="premiumbrand_wrapper_grid">
               <article className="gucci"><NavLink><img src={gucci} alt="" /></NavLink></article>
               <article className="prada"><NavLink><img src={prada} alt="" /></NavLink></article>
               <article className="lv"><NavLink><img src={lv} alt="" /></NavLink></article>
               <article className="bv"><NavLink><img src={bv} alt="" ></img></NavLink></article>
               <article className="marc_jacobs"><NavLink><img src={marc_jacobs} alt="" /></NavLink></article>
               <article className="bulgary"><NavLink><img src={bvlgari} alt="" /></NavLink></article>
               <article className="versace"><NavLink><img src={versace} alt="" /></NavLink></article>
               <article className="saint_laurent"><NavLink><img src={saint_laurent} alt="" /></NavLink></article>
               <article className="givenchy"><NavLink><img src={givenchy} alt="" /></NavLink></article>

            </div>
         </div>
      </>
   );
};

export default PremiumBrandGrid;
