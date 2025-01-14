
// import componnent
import Navbar from "../../components/navbar/navbar.jsx";
import OrderingProduct from "../../components/orderproduct/orderprodct";
import ProductPyment from "../../components/orderPyment/orderPymt";
import RelatedProduct from "../../components/relatedproduct/relatetedP.jsx";
import Mobile from "../../components/mobileNav/mobilenav.jsx";
import Mininav from "../../components/navbarmini/navbarmini.jsx";

import "./order.css";
const order = () => {

  return (
   <>
   
   <div className="order-container">
      <Mininav/>
      <Navbar/>
      <Mobile/>
      <div className="order">
         <OrderingProduct/>
         <ProductPyment/>
      </div>
      <RelatedProduct/>
   </div>
   
   
   
   </>
  )
}

export default order
