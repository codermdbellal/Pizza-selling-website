
// React icon import
import { IoCall } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

import "./navbarmini.css";
const navbar = () => {
  return (
    <div className="navbarmini-container bg-emerald-900 p-3">
       <div className="item-div-there">
          <IoCall className="icon-mini"/>
          <p>+880 1837232265</p>
       </div>
       <div className="item-div-there">
          <p>50% off select of any food | <a href="#">Shop Now</a></p>
       </div>
       <div className="item-div-there">
          <p>English <IoIosArrowDown className="icon-mini"/></p>
          <p>Location <IoIosArrowDown className="icon-mini"/></p>
       </div>
    </div>
  );
}

export default navbar