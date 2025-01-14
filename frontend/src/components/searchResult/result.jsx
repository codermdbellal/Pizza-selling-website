// src/components/SearchBar.js
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./result.css";

// react icon
import { IoSearchCircleSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

// import image 
 
const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(""); // State for error message

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://foood-project-backend.onrender.com/api/items/search?q=${query}`
      );

      if (response.data.length === 0) {
        setError("No data found"); // Set error if no results
        setResults([]); // Clear results
      } else {
        setResults(response.data); // Set results if found
        setError(""); // Clear error if there are results
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("An error occurred while fetching data"); // Set error on API failure
    }
  };

  const handleButtonClick = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    handleSearch(); // Call the search function
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (query) {
        handleSearch();
      } else {
        setResults([]);
        setError(""); // Clear error when query is cleared
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <div className="search-container">
      <div className="form">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <IoSearchCircleSharp
          onClick={handleButtonClick}
          className="mr-5 text-2xl"
        />
      </div>

      {error && (
        <div className="error-container">
          <img src="https://i.postimg.cc/BQQWgbMR/9318694-removebg-preview.png" alt="Error" className="error-image" />
        </div>
      )}

      <div className="results-list">
        {results.map((item) => (
          <div className="results" key={item.id}>
            <div className="show-result">
              <div className="image-count">
                <img src={item.image} alt="" />
              </div>

              <div className="info-count">
                <h2>
                  {item.name}
                  <div className="star flex">
                    <FaStar className="fastar" />
                    <FaStar className="fastar" />
                    <FaStar className="fastar" />
                    <FaStar className="fastar" />
                  </div>
                </h2>
                <h6>{item.description}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
