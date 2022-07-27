import "../styles/App.css";
import ProductPage from "./ProductPage";
import Homepage from "./Homepage";
import MyProfile from "./MyProfile";
import Checkout from "./Checkout";
import Navbar from "./Navbar";
import Footer from "./Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Checkout />
      {/* <MyProfile /> */}
      {/* <Homepage /> */}
      {/* <ProductPage /> */}
      <Footer />
    </div>
  );
}

export default App;
