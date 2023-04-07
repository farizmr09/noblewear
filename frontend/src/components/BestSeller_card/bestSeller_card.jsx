import React from "react";
import "./bestSeller_card.scss";

// Import Image
import ImageCard1 from "../../assets/images/imagecard1.webp";
import ImageCard2 from "../../assets/images/imagecard1.webp";
import ImageCard3 from "../../assets/images/imagecard1.webp";

const homepage_card = (props) => {
   return (
      <>
         <article className='homepage_card_wrapper'>
            <a href=''>
               <div className='homepage_card_wrapper_image'>
                  <img src={props.img} alt='' />
                  <p className='homepage_card_wrapper_image_tags'>
                     {props.promo}
                  </p>
               </div>
               <div className='homepage_card_wrapper_content'>
                  <div className='homepage_card_wrapper_content_title'>
                     <h2>{props.title}</h2>
                  </div>
                  <div className='homepage_card_wrapper_content_price'>
                     <p className='homepage_card_wrapper_content_price_real'>
                        {`Rp ${props.realprice}`}
                     </p>
                     <p className='homepage_card_wrapper_content_price_discount'>
                        {`Rp ${props.discountprice}`}
                     </p>
                  </div>
               </div>
            </a>
         </article>
         
      </>
   );
};

export default homepage_card;
