import "../styles/App.css";
import ProductPage from "./ProductPage";
import Homepage from "./Homepage";
import MyProfile from "./MyProfile";
import Checkout from "./Checkout";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="myProfile" element={<MyProfile />} />
        <Route path="productPage" element={<ProductPage />} />
        <Route path="about" element={<div style={{ color: "blue", margin: "15rem 0rem" }}>About Page</div>} />
        <Route path="*" element={<Homepage />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
