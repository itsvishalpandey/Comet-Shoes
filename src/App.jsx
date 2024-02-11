import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Drops from "./Pages/Drops/Drops";
import OurStory from "./Pages/OurStory/OurStory";
import Cart from "./Pages/Cart/Cart";
import ShoesCollection from "./Components/Collection/ShoesCollection/ShoesCollection";
import ForMen from "./Components/Collection/MensCollection/ForMen";
import ForWomens from "./Components/Collection/WomensCollection/ForWomens";
import ForAeonMen from "./Components/Collection/AeonShoes/ForAeonMen";
import ForAeonWomen from "./Components/Collection/AeonShoes/ForAeonWomen";
import ForCometMen from "./Components/Collection/CometShoes/ForCometMen";
import ForCometWomen from "./Components/Collection/CometShoes/ForCometWomen";
import ForSlides from "./Components/Collection/Slides/ForSlides";
import SingleProduct from "./Components/Product Page/SingleProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="drops" element={<Drops />} />
          <Route path="our-story" element={<OurStory />} />
          <Route path="cart" element={<Cart />} />

          <Route path="collection" element={<ShoesCollection />} />
          <Route path="men-collection" element={<ForMen />} />
          <Route path="women-collection" element={<ForWomens />} />
          <Route path="aeon-men" element={<ForAeonMen />} />
          <Route path="aeon-women" element={<ForAeonWomen />} />
          <Route path="comet-men" element={<ForCometMen />} />
          <Route path="comet-women" element={<ForCometWomen />} />
          <Route path="slides" element={<ForSlides />} />
          <Route path="single-product" element={<SingleProduct />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
