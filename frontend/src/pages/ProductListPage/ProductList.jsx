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
    const [currentPage, setCurrentPage] = useState('');
    const [Loaded, setLoaded] = useState(false);
    const [totalPages, setTotalPages] = useState(0);

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
                <button className='pagination_num' key={i} onClick={() => handlePageClick(i)} isActive={currentPage == i} >
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
                        <button >Submit</button>
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

                    <div className="pagination">
                        <button disabled={currentPage === 1} onClick={handlePagePrevClick} className='pagination_prev'>
                            Prev
                        </button>
                        {renderPageButtons()}
                        <button disabled={currentPage === totalPages} onClick={handlePageNextClick} className='pagination_next'>
                            Next
                        </button>
                    </div>
                </div>

            </div>
        </>
    );
}

export default ProductList