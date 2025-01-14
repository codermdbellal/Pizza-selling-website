// React icons
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoIosArrowDown} from "react-icons/io";
import { BsInstagram } from "react-icons/bs";



import "./footer.css";
const footer = () => {
  return (
    <>
        <div className="footer  pb-10 pt-5">
          <div className="gmail-singup">
            <h1 className="text-center pt-5  text-3xl text-slate-50 font-bold">Join Our Newsletter</h1>
            <p className="text-center pt-2 pl-2 text-white">
              Subscribe to our newsletter and receive the latest news about our products and services!
            </p>
            <div className="subcription flex gap-2 mt-5">
              <input
                type="text"
                className="input-fill p-2  border rounded-full outline-none bg-transparent text-white"
                placeholder="Enter Your Gmail"
              />
              <button className="button rounded-full py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="footer-content bg-slate-800">

          <div className="company-info">
            <img src="https://i.postimg.cc/8cGGDbdC/Logo-CPs5-OF-4.png" className="w-40" alt="" />
            
            <p className="text-sm pt-2">
              Browse our menu, place your order online, and enjoy your favorite meals from the comfort of your home. Whether it’s
              a quiet night in or a family gathering, we have something for everyone.
            </p>

            <h2 className="text pt-5">
              Follow US 
            </h2>
            <div className="social-media flex gap-5 mt-1">
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <BsInstagram />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <ul className="footer-flel">
            <h2>
              See Our Web Page 
            </h2>

            <li className="mt-3">
              <IoIosArrowDown className="arrow" />
              <a href="#">Home</a>
            </li>
            <li>
              <IoIosArrowDown className="arrow" />
              <a href="#">About</a>
            </li>
            <li>
              <IoIosArrowDown className="arrow" />
              <a href="#">Menu</a>
            </li>
            <li>
              <IoIosArrowDown className="arrow" />
              <a href="#">Resrvation</a>
            </li>
          </ul>
          <ul className="footer-flel">
            <h2>
              Contact Us
            </h2>
            <li  className="mt-3">
              <IoIosArrowDown className="arrow" />
              <a href="#">Address: 1234 Foodie Street, Gourmet City</a>
            </li>
            <li>
              <IoIosArrowDown className="arrow" />
              <a href="#">Phone: (123) 456-7890</a>
            </li>
            <li>
              <IoIosArrowDown className="arrow" />
              <a href="#">Email: contact@restaurantname.com </a>
            </li>
          </ul>
          <ul className="footer-flel">
            <h2>
              Food Service
            </h2>
            <li  className="mt-3">
              <IoIosArrowDown className="arrow" />
              <a href="#">Expert Preparation</a>
            </li>
            <li>
              <IoIosArrowDown className="arrow" />
              <a href="#">Fresh Ingredients</a>
            </li>
            <li>
              <IoIosArrowDown className="arrow" />
              <a href="#">Flavorful Dishes</a>
            </li>
            <li>
              <IoIosArrowDown className="arrow" />
              <a href="#">Artful Presentation</a>
            </li>
          </ul>
        </div>
    </>
  )
};

export default footer;
