import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function NavigationBar() {
  return (
    <div className="navigationbar">
      <div className="item">
        <Link to="/review" className="link">
          Reviews
        </Link>
      </div>
      <div className="item">
        <Link to="/profile" className="link">
          Profile
        </Link>
      </div>
      <div className="item">
        <Link to="/orderlist" className="link">
          Order List
        </Link>
      </div>
    </div>
  );
}

export default NavigationBar;
