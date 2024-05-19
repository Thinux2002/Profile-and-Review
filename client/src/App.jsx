import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Review from "./pages/Review";
import Profile from "./pages/Profile";
import OrderList from "./pages/OrderList";
import Header from "./components/header";
import NavigationBar from "./components/NavBar";
import AddReview from "./pages/AddReview";
import ReviewTable from "./pages/ReviewTable";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Review />} />
          <Route path="/review" element={<Review />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/orderlist" element={<OrderList />} />
          <Route path="/addreview" element={<AddReview />} />
          <Route path="/viewreview" element={<ReviewTable />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
