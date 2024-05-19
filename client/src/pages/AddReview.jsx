import React from "react";
import ReviewForm from "../components/ReviewForm";
import NavigationBar from "../components/NavBar";
import Intro from "../components/Intro";

function AddReview() {
  return (
    <div>
      <NavigationBar />
      <Intro heading="Add Review" />
      <ReviewForm />
    </div>
  );
}

export default AddReview;
