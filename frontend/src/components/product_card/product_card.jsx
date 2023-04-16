import React from 'react'
import './product_card.scss';

// DUMMY IMG
import Productimg from '../../assets/images/productimg.webp';

const product_card = (props) => {
    return (
        <article className='product_card'>
            <img src={Productimg} alt="" />
            <div className='product_card_desc'>
                <h2>{props.title}</h2>
                <p className='product_card_desc_brand'>Zara</p>

                <div className="product_card_desc_price">
                    <p>{`Rp ${props.price}`}</p>
                    <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8538 23L7.90376 17.9196L2.9927 12.8392C0.335766 10.0314 0.335766 5.63688 2.9927 2.82909C4.29369 1.57874 6.05582 0.925341 7.85748 1.02522C9.65914 1.1251 11.3382 1.96927 12.4931 3.35576L12.8538 3.7097L13.2111 3.34052C14.3659 1.95403 16.045 1.10986 17.8467 1.00998C19.6483 0.9101 21.4105 1.5635 22.7115 2.81385C25.3684 5.62164 25.3684 10.0162 22.7115 12.8239L17.8004 17.9044L12.8538 23Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>

        </article>
    )
}

export default product_card