import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "./Components/Topbar/Topbar";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "./page/Home/Home";
import Footer from "./Components/Footer/Footer";
import ProductDetails from "./page/ProductDetails/ProductDetails";
import Cart from "./page/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer/>
      <a href="/" class="btn btn-primary back-to-top"><i class="fa fa-angle-double-up"></i></a>
    </BrowserRouter>
  );
}

export default App;
