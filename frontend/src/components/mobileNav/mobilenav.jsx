// import react
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { BsCreditCard2Back } from "react-icons/bs";

// import react router dom
import { Link } from "react-router-dom";

import "./mobilenav.css";
const mobilenav = () => {
  return (
    <>
      <div className="mobile-nav">
        <div className="phone">
          <div className="product-count">
            <div className="product-item">
              <MdOutlineShoppingCart />
            </div>
          </div>
          <ul>
            <li>
              <Link to={`/`}>
               <AiOutlineHome className="mobile-icon" />
              </Link>
            </li>
            <li>
              <a href="#">
                <BsCreditCard2Back className="mobile-icon" />
              </a>
            </li>
            <div className="product-item">
              <MdOutlineShoppingCart />
            </div>
            <li>
              <a href="#">
                <FiHeart className="mobile-icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <MdAccountCircle className="mobile-icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default mobilenav;
