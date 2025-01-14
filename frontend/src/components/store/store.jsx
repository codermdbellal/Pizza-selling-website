// React icon
import { FaStar } from "react-icons/fa";

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./store.css";
const store = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [products, setProducts] = useState([])

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    axios
      .get("https://foood-project-backend.onrender.com/api/items/products")
      .then((response) => setProducts(response.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {/*-----> Store 2 <---------- */}
      <div className="store" id="store">
        <h2>Pizza For you!</h2>
        <div className="store-product ">
          {products.slice(0,4).map((product) => (
            <div key={product._id} className="main-product">
              <div className="product-item">
                <img src={product.image} alt="" />
              </div>

              <div className="details flex justify-between align-middle mt-3 gap-20px">
                <div className="left">
                  <h2>{product.name}</h2>
                  <h3>{product.description}</h3>
                </div>
                <div>
                  <p>${product.price}</p>
                </div>
              </div>

              <div className="button">
                <div className="star flex">
                  <FaStar className="fastar" />
                  <FaStar className="fastar" />
                  <FaStar className="fastar" />
                  <FaStar className="fastar" />
                </div>
                <Link to={`/shop/${product._id}`}>
                  <button>Buy Now</button>
                </Link>
              </div>
            </div>
           ))} 
        </div>
      </div>

      {/*-----> Store 2 <---------- */}
      <div className="store" id="berger">
        <h2>Berger For you!</h2>
        <div className="store-product ">
          {products.slice(4,8).map((product) => (
            <div key={product._id} className="main-product">
              <div className="product-item">
                <img src={product.image} alt="" />
              </div>

              <div className="details flex justify-between align-middle mt-3 gap-20px">
                <div className="left">
                  <h2>{product.name}</h2>
                  <h3>{product.description}</h3>
                </div>
                <div>
                  <p>${product.price}</p>
                </div>
              </div>

              <div className="button">
                <div className="star flex">
                  <FaStar className="fastar" />
                  <FaStar className="fastar" />
                  <FaStar className="fastar" />
                  <FaStar className="fastar" />
                </div>
                <Link to={`/shop/${product._id}`}>
                  <button>Buy Now</button>
                </Link>
              </div>
            </div>
           ))} 
        </div>
      </div>

      {/*-----> Store 2 <---------- */}
      <div className="store" id="briyani">
        <h2>Briyani For you!</h2>
        <div className="store-product ">
          {products.slice(8,12).map((product) => (
            <div key={product._id} className="main-product">
              <div className="product-item">
                <img src={product.image} alt="" />
              </div>

              <div className="details flex justify-between align-middle mt-3 gap-20px">
                <div className="left">
                  <h2>{product.name}</h2>
                  <h3>{product.description}</h3>
                </div>
                <div>
                  <p>${product.price}</p>
                </div>
              </div>

              <div className="button">
                <div className="star flex">
                  <FaStar className="fastar" />
                  <FaStar className="fastar" />
                  <FaStar className="fastar" />
                  <FaStar className="fastar" />
                </div>
                <Link to={`/shop/${product._id}`}>
                  <button>Buy Now</button>
                </Link>
              </div>
            </div>
           ))} 
        </div>
      </div>



    </div>
  );
};

export default store;
