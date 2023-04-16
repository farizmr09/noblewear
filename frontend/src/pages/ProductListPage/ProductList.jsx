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
import Slide2 from '../../assets/images/slider2.webp';
import Slide3 from '../../assets/images/slider3.webp';
import Slide4 from '../../assets/images/slider4.webp';

const ProductList = () => {
    // STATE INITIALIZATION
    const [products, setProducts] = useState([]);
    const [pattern, setPattern] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [currentPage, setCurrentPage] = useState('');
    const [Loaded, setLoaded] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [productCount, setProductCount] = useState(0);

    const maxPageButtons = 10;

    // Banner Slider Settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: `1`,
        slidesToScroll: 1,
    };

    // PRODUCTS FETCH STARTS

    let url = 'http://localhost:5000/products?' + (minPrice ? 'min=' + minPrice + '&' : '') +
        (maxPrice ? 'max=' + maxPrice + '&' : '') +
        (pattern ? 'brand=' + pattern : '') + (currentPage ? 'page=' + currentPage : '');



    const handleChange = (name) => (event) => {
        switch (name) {
            case 'brand':
                setPattern(event.target.value);
                break;
            case 'minPrice':
                setMinPrice(event.target.value);
                break;
            case 'maxPrice':
                setMaxPrice(event.target.value);
                break;
            case 'maxPrice':
                setMaxPrice(event.target.value);
                break;
            case 'setPage':
                setCurrentPage(event.target.value);
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
                setProducts(data.data);
                setTotalPages(data.totalPages);
                setProductCount(data.totalProduct);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        fetchProducts();
        if (products.length > 0) {
            setLoaded(true);
        } else {
            setLoaded(false);
        }
    }, [pattern, minPrice, maxPrice, currentPage]);

    // PRODUCT FETCH ENDS

    // PAGINATION STARTS
    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handlePagePrevClick = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    const handlePageNextClick = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const renderPageButtons = () => {
        const pageButtons = [];
        let startPage = 1;
        let endPage = totalPages;

        if (totalPages > maxPageButtons) {
            const halfMaxButtons = Math.floor(maxPageButtons / 2);
            startPage = Math.max(currentPage - halfMaxButtons, 1);
            endPage = Math.min(startPage + maxPageButtons - 1, totalPages);

            if (endPage - startPage < maxPageButtons - 1) {
                startPage = Math.max(endPage - maxPageButtons + 1, 1);
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            pageButtons.push(
                <button className={`pagination_num ${currentPage == i ? 'active' : ''}`} key={i} onClick={() => handlePageClick(i)} >
                    {i}
                </button>
            );
        }

        return pageButtons;
    };




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
                        <img src={Slide2} alt="" />
                        <img src={Slide3} alt="" />
                        <img src={Slide4} alt="" />
                    </Slider>
                </div>
            </div>

            <div className="productList_productList">
                <div className='productList_productList_filter'>
                    <ul className="productList_productList_filter_sorting">
                        <li>Showing <span>{productCount}</span> Products</li>
                    </ul>
                </div>

                <div className='productList_productList_products'>
                    <div className='search'>
                        <input type="text" name="" id="" value={pattern} onChange={(e) => { setPattern(e.currentTarget.value) }} />
                        <button onClick={() => setPattern(pattern)}>
                            <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.125 12.7348C1.12419 7.37626 4.90877 2.76337 10.1642 1.71724C15.4196 0.671102 20.6822 3.48309 22.7335 8.43347C24.7847 13.3839 23.0534 19.0939 18.5983 22.0714C14.1431 25.049 8.20509 24.4648 4.41562 20.6762C2.30894 18.5702 1.12525 15.7136 1.125 12.7348Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M20.3003 20.678L26.7188 27.0965" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>

                    <div className='catalog'>
                        {console.log(products)}
                        {console.log(totalPages)}
                        {console.log(currentPage)}
                        {Loaded && products.length > 0 && (
                            products.map(product => (
                                <ProductCard key={product.PRODUCT_ID} title={product.BRAND} price={product.PRICE} />
                            ))
                        )}
                    </div>


                    {totalPages > 1 && (
                        <div className="pagination">
                            <button disabled={currentPage === 1} onClick={handlePagePrevClick} className='pagination_prev'>
                                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 1L1 6L6 11" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </button>
                            {renderPageButtons()}
                            <button disabled={currentPage === totalPages} onClick={handlePageNextClick} className='pagination_next'>
                                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L6 6L1 11" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </button>
                        </div>
                    )}

                </div>

            </div>
        </>
    );
}

export default ProductList