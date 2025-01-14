/* eslint-disable react-hooks/rules-of-hooks */

// import react icons
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


import "./orderPymt.css"
const orderPymt = () => {

   
  const { productId } = useParams();
   
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get(`https://foood-project-backend.onrender.com/api/items/products/${productId}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error(error));
  }, [productId]);

  
  if (!product) {
    return <h1>Loading...</h1>;
  }


  return (
    <>

    <div className="orderPymt-container">

       <div className="shop-page">
        <div className="orderPymt">
           <h2 className="text">Testi {product.name}</h2>
           <div className="product-review-count flex gap-5 mt-3">
             <div className="review-icon flex items-center gap-1">
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaStar className="review"/>
               <FaRegStar className="review"/>
             </div>

             <div className="reviwe-count flex gap-1">
                <h5>{product.rating}</h5>
                <h5>reviews</h5>
             </div>
           </div>

           <div className="price mt-3">
             <h2 className="text-green-500">${product.price}</h2>
           </div>

           <div className="mini-product-show flex gap-3">
              <div className="item">
                <img src={product.image} alt="" />
              </div>
              <div className="item">
                <img src={product.image} alt="" />
              </div>
              <div className="item">
                <img src={product.image} alt="" />
              </div>
              <div className="item">
                <img src={product.image} alt="" />
              </div>
              
           </div>
           <div className="product-description">
              <p>{product.description}</p>
           </div>

           <div className="product-size mt-3">
              <h2>Product size!</h2>
              <div className="actuall-product flex gap-3">
                <div className="size">
                  <p>{product.rating}</p>
                </div>
                <div className="size">
                    <p>20</p>
                </div>
                <div className="size">
                    <p>20</p>
                </div>
                <div className="size">
                    <p>20</p>
                </div>
              </div>
           </div>

           <div className="product-weet mt-3">
              <h2>Product weet!</h2>

              <div className="actuall-weet flex gap-3">
                <div className="size">
                    <p>{product.rating}</p>
                </div>
                <div className="size">
                    <p>15</p>
                </div>
                <div className="size">
                    <p>30</p>
                </div>
                <div className="size">
                    <p>25</p>
                </div>
              </div>
           </div>

           <div className="order-now">
              <div className="button  hover:opacity-80 transition">
                <button>Order now</button>
              </div>
              <div className="love">
                <FaRegHeart/>
              </div>
           </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default orderPymt
