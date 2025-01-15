// React icon
import { FaStar } from "react-icons/fa";

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./store.css";
const store = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);


  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setLoading(true); // Start loading before the request
    axios
      .get('https://pizza-selling-website.onrender.com/api/items/products')
      .then((response) => {
        setProducts(response.data);
        setLoading(false); // Stop loading after the data is fetched
      })
      .catch((err) => {
        console.error(err);
        setLoading(false); // Stop loading if there is an error
      });
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loader"></div> // Use the loader class here
      ) : (
        <div>
          {/*-----> Store 2 <---------- */}
          <div className="store" id="store">
            <h2></h2>
            <div className="store-product ">
              {products.slice(0, 4).map((product) => (
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
            <h2></h2>
            <div className="store-product ">
              {products.slice(4, 8).map((product) => (
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
            <h2></h2>
            <div className="store-product ">
              {products.slice(8, 12).map((product) => (
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
      )}
    </div>
  );
};

export default store;
