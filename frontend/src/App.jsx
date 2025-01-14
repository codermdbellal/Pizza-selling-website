import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./components/home/home.jsx";
import Loader from "./components/loader/loader.jsx";  
import Order from "./pag/ordaring/order.jsx";


import { useState, useEffect } from "react";

import "./App.css";
const App = () => {
  const [loading, setLoading] = useState(true); // State to track loading

  useEffect(() => {
    // Simulate a fetch or async operation
    setTimeout(() => {
      setLoading(false); // Set loading to false after data is fetched
    }, 1000); // Example delay
  }, []);

  return (
    <div>
      <div>
        {/* Conditional Loader */}
        {loading ? <Loader /> : null}

        {/* Router Setup */}
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/shop/:productId" element={<Order/>} />
          </Routes>
         
        </Router>

      </div>
    </div>
  );
};

export default App;
