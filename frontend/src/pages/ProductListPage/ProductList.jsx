import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './ProductList.scss'

// SLIDER DEPENDENCIES
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.scss";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
// COMPONENT
import Header from '../../layout/header_general/header_general';
import ProductCard from '../../components/product_card/product_card';


// IMAGE IMPORT
import banner1 from '../../assets/images/productlistbanner.webp';

const ProductList = () => {
    // STATE INITIALIZATION
    const [products, setProducts] = useState([]);
    const [pattern, setPattern] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [Loaded, setLoaded] = useState(false);

    // Banner Slider Settings

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: `1`,
        slidesToScroll: 1,
    };


    let url = 'http://localhost:5000/products/search?' + (minPrice ? 'min=' + minPrice + '&' : '') +
        (maxPrice ? 'max=' + maxPrice + '&' : '') +
        (pattern ? 'pattern=' + pattern : '');



    const handleChange = (name) => (event) => {
        switch (name) {
            case 'pattern':
                setPattern(event.target.value);
                break;
            case 'minPrice':
                setMinPrice(event.target.value);
                break;
            case 'maxPrice':
                setMaxPrice(event.target.value);
                break;
            default:
                break;
        }
    }

    const fetchProducts = () => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setLoaded(true);
                setProducts(data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        fetchProducts();
    }, [pattern, minPrice, maxPrice]);

    useEffect(() => {
        if (products.length > 0) {
            setLoaded(true);
        } else {
            setLoaded(false);
        }
    }, [products]);

    return (
        <>
            <Header />
            <div className='productList_banner'>
                <div className="productList_banner_content">
                    <h1>Unleash Your Style</h1>
                    <div className="productList_banner_content_desc">
                        <p>Browse a curated selection of fashion-forward pieces and find your new wardrobe favorites.</p>
                        <NavLink>Shop Now</NavLink>
                    </div>
                    <Slider {...settings} className='productList_banner_content_sliderbg'>
                        <img src={banner1} alt="" />
                        <img src={banner1} alt="" />
                        <img src={banner1} alt="" />
                        <img src={banner1} alt="" />
                        <img src={banner1} alt="" />
                    </Slider>
                </div>
            </div>

            <div className="productList_productList">
                <div className='productList_productList_filter'>

                </div>
                <div className='productList_productList_products'>
                    <div className='search'>
                        <input type="text" name="" id="" />
                        <button>Submit</button>
                    </div>

                    <div className='catalog'>
                        {console.log(`second ${Loaded}`)}
                        {Loaded && products.length > 0 && (
                            products.map(product => (
                                <ProductCard title={product.BRAND} price={product.PRICE} />
                            ))
                        )}
                    </div>
                </div>

            </div>
        </>
    );
}

export default ProductList