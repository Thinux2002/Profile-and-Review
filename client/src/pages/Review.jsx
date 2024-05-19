import React from "react";
import NavigationBar from "../components/NavBar";
import Intro from "../components/Intro";
import ReviewSelection from "../components/ReviewSelection";
import { Link } from "react-router-dom";
import "../styles/Review.css";

function Review() {
  return (
    <div>
      <NavigationBar />
      <Intro heading="Review" />
      <div className="container">
        <Link to="/addreview">
          <ReviewSelection heading="Add Review" />
        </Link>
        <Link to="/viewreview">
          <ReviewSelection heading="Review List" />
        </Link>
      </div>
    </div>
  );
}

export default Review;
