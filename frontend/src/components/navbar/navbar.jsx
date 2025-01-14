// react state

import { useState, useEffect } from "react";

// React icon
import { MdAccountCircle } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { CgMenu } from "react-icons/cg";


// import Account component sing in or sing up perpas
import Account from "../account/account.jsx";
import SearchBar from "../searchResult/result.jsx";

import "./navbar.css";
import { Link } from "react-router-dom";
const navbar = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the dropdown open/close state
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isScrolled, setIsScrolled] = useState(false);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 5) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
      <div className="navbar-container">
        <div  className={`nav ${isScrolled ? "scrolled" : ""}`}>
          
          <div className="input2">
            <SearchBar />
          </div>

          <div className="logo">
            <Link to="/">
              <img src="https://i.postimg.cc/8cGGDbdC/Logo-CPs5-OF-4.png" alt="" />
            </Link>
          </div>

          <ul className="ul-menu flex gap-10">
            <li>
              <Link to="/" className="active">
                Home
              </Link>
            </li>

            <li>
              <a href="#">About</a>
            </li>

            <li>
              <a href="#">Menu</a>
            </li>

            <li>
              <a href="#">Reservation</a>
            </li>

            <li>
              <a href="#">Blog</a>
            </li>

            <li>
              <a href="#">Contact</a>
            </li>
          </ul>

          <div className="car-or-account">
            
           <div className="input1">
              <SearchBar/>
            </div>
            
            <div className="input dropdown">
              <div className="flex gap-1" onClick={toggleDropdown}>
                <MdAccountCircle className="cart-icon-by-man" />
                <p> Account </p>
              </div>

              {isOpen && (
                <div className="dropdown-menu">
                  <Account />
                </div>
              )}
            </div>

            <div className="input">
              <div className="count">0</div>
              <MdShoppingCart className="cart-icon-by-man" />
            </div>

            <div className="responsive-nav">
              <CgMenu className="nav-menu-responsive" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default navbar;
