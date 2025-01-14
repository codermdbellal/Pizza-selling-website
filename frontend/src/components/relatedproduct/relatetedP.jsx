
// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// React-owl-carousel
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// import react icon
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

import "./relatedP.css";
const relatetedP = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const carouselRef = useRef(null);

  const option = {
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    dots:false,
    autoplaySpeed: 3000,
    responsive: {
     300: {items:1},
     400:{items:1},
     600: {items: 2},
     900: {items: 3},
     1100: {items:4},
    },

  }

  return(
  <>

     <div className="relateted-product-container">
        <h1>Related Products !</h1>

        {/* Custom Navigation Buttons */}
        <button
          className="custom-nav-btn prev-btn"
          onClick={() => carouselRef.current.prev()}
        >
          <FaArrowLeft size={20} />
        </button>

        <OwlCarousel ref={carouselRef}  className="owl-theme" {...option}>

          <div className="item-carousel">
            
            <img src="https://i.postimg.cc/3xWfqLXj/pizza1.jpg" alt="" />
            <div className="price-menu">
                <h2>Burger and Pizza!</h2>
                <h4 className="text-green-500 text-xl">$20</h4>
            </div>
            <div className="review-icon flex items-center mb-4 gap-1">
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaRegStar className="review"/>
             </div>
            <div className="button">
              Buy Now
            </div>
          </div>

          <div className="item-carousel">
           
            <img src="https://i.postimg.cc/B63gJNKV/pizza2.jpg" alt="" />
            <div className="price-menu">
                <h2>Burger and Pizza!</h2>
                <h4 className="text-green-500 text-xl">$20</h4>
            </div>
            <div className="review-icon flex items-center mb-4 gap-1">
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaRegStar className="review"/>
             </div>
            <div className="button">
              Buy Now
            </div>
          </div>

          <div className="item-carousel">
            <img src="https://i.postimg.cc/J06ccLdf/pizza3.jpg" alt="" />
            <div className="price-menu">
                <h2>Burger and Pizza!</h2>
                <h4 className="text-green-500 text-xl">$20</h4>
            </div>
            <div className="review-icon flex items-center mb-4 gap-1">
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaRegStar className="review"/>
             </div>
            <div className="button">
              Buy Now
            </div>
          </div>

          <div className="item-carousel">
            <img src="https://i.postimg.cc/BbQBK6N5/pizza4.jpg" alt="" />
            <div className="price-menu">
                <h2>Burger and Pizza!</h2>
                <h4 className="text-green-500 text-xl">$20</h4>
            </div>
            <div className="review-icon flex items-center mb-4 gap-1">
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaRegStar className="review"/>
             </div>
            <div className="button">
              Buy Now
            </div>
          </div>

          <div className="item-carousel">
            <img src="https://i.postimg.cc/cCsXBT1n/barger1.jpg" alt="" />
            <div className="price-menu">
                <h2>Burger and Pizza!</h2>
                <h4 className="text-green-500 text-xl">$20</h4>
            </div>
            <div className="review-icon flex items-center mb-4 gap-1">
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaRegStar className="review"/>
             </div>
            <div className="button">
              Buy Now
            </div>
          </div>

          <div className="item-carousel">
            <img src="https://i.postimg.cc/zfK7m4Vh/barger2.jpg" alt="" />
            <div className="price-menu">
                <h2>Burger and Pizza!</h2>
                <h4 className="text-green-500 text-xl">$20</h4>
            </div>
            <div className="review-icon flex items-center mb-4 gap-1">
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaRegStar className="review"/>
             </div>
            <div className="button">
              Buy Now
            </div>
          </div>

          <div className="item-carousel">
            <img src="https://i.postimg.cc/htHs5KPg/barger3.jpg" alt="" />
            <div className="price-menu">
                <h2>Burger and Pizza!</h2>
                <h4 className="text-green-500 text-xl">$20</h4>
            </div>
            <div className="review-icon flex items-center mb-4 gap-1">
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaRegStar className="review"/>
             </div>
            <div className="button">
              Buy Now
            </div>
          </div>

          <div className="item-carousel">
            <img src="https://i.postimg.cc/rwdgjDTQ/barger4.jpg" alt="" />
            <div className="price-menu">
                <h2>Burger and Pizza!</h2>
                <h4 className="text-green-500 text-xl">$20</h4>
            </div>
            <div className="review-icon flex items-center mb-4 gap-1">
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaRegStar className="review"/>
             </div>
            <div className="button">
              Buy Now
            </div>
          </div>

          <div className="item-carousel">
            <img src="https://i.postimg.cc/QC0S45Vn/briyani.jpg" alt="" />
            <div className="price-menu">
                <h2>Burger and Pizza!</h2>
                <h4 className="text-green-500 text-xl">$20</h4>
            </div>
            <div className="review-icon flex items-center mb-4 gap-1">
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaRegStar className="review"/>
             </div>
            <div className="button">
              Buy Now
            </div>
          </div>

          <div className="item-carousel">
            <img src="https://i.postimg.cc/gcDM294q/briyani1.jpg" alt="" />
            <div className="price-menu">
                <h2>Burger and Pizza!</h2>
                <h4 className="text-green-500 text-xl">$20</h4>
            </div>
            <div className="review-icon flex items-center mb-4 gap-1">
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaRegStar className="review"/>
             </div>
            <div className="button">
              Buy Now
            </div>
          </div>

          <div className="item-carousel">
            <img src="https://i.postimg.cc/VLkKS7Vy/briyani2.jpg" alt="" />
            <div className="price-menu">
                <h2>Burger and Pizza!</h2>
                <h4 className="text-green-500 text-xl">$20</h4>
            </div>
            <div className="review-icon flex items-center mb-4 gap-1">
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaRegStar className="review"/>
             </div>
            <div className="button">
              Buy Now
            </div>
          </div>

          <div className="item-carousel">
            <img src="https://i.postimg.cc/QxY0cp2F/briyani3.jpg" alt="" />
            <div className="price-menu">
                <h2>Burger and Pizza!</h2>
                <h4 className="text-green-500 text-xl">$20</h4>
            </div>
            <div className="review-icon flex items-center mb-4 gap-1">
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaRegStar className="review"/>
             </div>
            <div className="button">
              Buy Now
            </div>
          </div>
        </OwlCarousel>
        
        <button
          className="custom-nav-btn next-btn"
          onClick={() => carouselRef.current.next()}
        >
          <FaArrowRight size={20} />
        </button>
      </div>
  </>
    
  )
};

export default relatetedP;
  