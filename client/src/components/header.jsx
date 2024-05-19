import React from "react";
import "../styles/header.css";

function Header() {
  return (
    <div className="header">
      <p>Customer Dashboard</p>
      <div className="navbutton">
        <button type="button" className="button">
          Actor
        </button>
        <button type="button" className="button">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Header;
