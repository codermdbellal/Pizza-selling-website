

// React-owl-carousel
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// carousel image 


import "./brand.css";
const brand = () => {


  const options = {
    loop: true,
    margin: 10,
    nav: false,
    autoplay:true,
    autoplaySpeed: 10,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 1 },
    },
  };

  return (
    <>
      <div className="brand-container">
        <div>
          <OwlCarousel {...options}>
            
            <div className="item">
             <img src="https://i.ibb.co.com/SwyRKQf/barger1.jpg" alt="" />
            </div>

            <div className="item">
             <img src="https://i.ibb.co.com/sFWhc5b/barger2.jpg" alt="" />
            </div>

            <div className="item">
              <img src="https://i.ibb.co.com/dg2CC1X/pizza3.jpg" alt="" />
            </div>

            <div className="item">
             <img src="https://i.ibb.co.com/mc9qS2h/barger3.jpg" alt="" />
            </div>

            <div className="item">
             <img src="https://i.ibb.co.com/tmP9bM6/barger4.jpg" alt="" />
            </div>
            
          </OwlCarousel>
        </div>

        <div className="product-off">
          <h1>
            Grab Upto <span className="text">50%</span> Off
          </h1>
          <h1>on Selected Any Pizza!</h1>
          <a href="#store">
            {" "}
            <button className="button">Buy Now</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default brand;
