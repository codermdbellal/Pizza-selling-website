import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./category.css";
const category = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [products, setProducts] = useState([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    axios
      .get("https://foood-project-backend.onrender.com/api/items/products")
      .then((response) => setProducts(response.data))
      .catch((err) => console.error(err));
  }, []);


  return (
    <div>
      <div className="category-container">
        {products.slice(1, 4).map((product) => (
          <div key={product._id} className="main-category">
            <Link to={`/shop/${product._id}`}>
              <img src={product.image} alt="" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default category;

