
// React icon 
import { IoIosArrowDown } from "react-icons/io";

// React-owl-carousel
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import "./productmenu.css"
const productmenu = () => {

   // Owl Carousel options
   const options = {
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: {
      320: { items: 3 },
      448: { items: 4 },
      768: { items: 5 },
      1000: { items: 5},
    },
  };

  return (
    <>
      <div className="product-menu">
        <OwlCarousel className="item" {...options} >
       
            <div className="product-type">
              <h3>Berger</h3>
              <IoIosArrowDown className="arrow" />
            </div>
          

          <a href="#store">
            <div className="product-type">
              <h3>Pizza</h3>
              <IoIosArrowDown className="arrow" />
            </div>
          </a>

          <a href="#briyani">
            <div className="product-type">
              <h3>Briyani</h3>
              <IoIosArrowDown className="arrow" />
            </div>
          </a>

          <a href="#">
            <div className="product-type">
              <h3>Review</h3>
              <IoIosArrowDown className="arrow" />
            </div>
          </a>

          <a href="#">
            <div className="product-type">
              <h3>Filter</h3>
              <IoIosArrowDown className="arrow" />
            </div>
          </a>
        </OwlCarousel>

        <div className="short-by">
          <div className="product-type">
            <h3>Short by</h3>
            <IoIosArrowDown className="arrow" />
          </div>
        </div>
      </div>
    </>
  );
}

export default productmenu